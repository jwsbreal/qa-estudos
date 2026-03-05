using System.Xml.Linq;
using LeitorNFe.models;

namespace LeitorNFe.services
{
    public class LeitorXmlService
    {
        public static NotaFiscal LerNota(string caminhoArquivo)
        {
            var doc = XDocument.Load(caminhoArquivo);

            var chave = doc.Descendants()
                .FirstOrDefault(e => e.Name.LocalName == "chNFe")?.Value ?? "";

            string numeroNota = "";

            // Caso seja NFE normal ou cancelada
            if (!string.IsNullOrEmpty(chave) && chave.Length >= 34)
            {
                var numeroCompleto = chave.Substring(25, 9);
                numeroNota = numeroCompleto.Substring(numeroCompleto.Length - 5);
            }

            // Caso seja inutilização
            var nNFIni = doc.Descendants()
                .FirstOrDefault(e => e.Name.LocalName == "nNFIni")?.Value;

            var nNFFin = doc.Descendants()
                .FirstOrDefault(e => e.Name.LocalName == "nNFFin")?.Value;

            if (!string.IsNullOrEmpty(nNFIni))
            {
                numeroNota = nNFIni;
            }

            if (!string.IsNullOrEmpty(nNFIni) && !string.IsNullOrEmpty(nNFFin) && nNFIni != nNFFin)
            {
                numeroNota = $"{nNFIni} até {nNFFin}";
            }
            var cnpj = doc.Descendants()
                .FirstOrDefault(e => e.Name.LocalName == "CNPJ")?.Value ?? "";

            var data = doc.Descendants()
                .FirstOrDefault(e => e.Name.LocalName == "dhEmi")?.Value ?? "";

            var valor = doc.Descendants()
                .FirstOrDefault(e => e.Name.LocalName == "vNF")?.Value ?? "";


            string status = "Ativa";

            if (caminhoArquivo.Contains("-can"))
                status = "Cancelada";

            if (caminhoArquivo.Contains("-inu"))
                status = "Inutilizada";

            if (caminhoArquivo.Contains("-den"))
                status = "Denegada";

            return new NotaFiscal
            {
                Arquivo = Path.GetFileName(caminhoArquivo),
                Chave = chave,
                NumeroNota = numeroNota,
                CNPJEmitente = cnpj,
                DataEmissao = data,
                Valor = valor,
                Status = status
            };
        }
    }
}