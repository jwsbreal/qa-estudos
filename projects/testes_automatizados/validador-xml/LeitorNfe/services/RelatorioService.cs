using System.Text;
using LeitorNFe.models;

namespace LeitorNFe.services
{
    public class RelatorioService
    {
        public static void GerarCSV(List<NotaFiscal> notas, string caminhoSaida)
        {
            var csv = new StringBuilder();

            csv.AppendLine("Arquivo,Chave,CNPJEmitente,DataEmissao,Valor,Status");

            foreach (var nota in notas)
            {
                csv.AppendLine($"{nota.Arquivo},{nota.Chave},{nota.CNPJEmitente},{nota.DataEmissao},{nota.Valor},{nota.Status}");
            }

            File.WriteAllText(caminhoSaida, csv.ToString(), Encoding.UTF8);
        }
    }
}