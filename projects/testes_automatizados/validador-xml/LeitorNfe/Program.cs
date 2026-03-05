using LeitorNFe.models;
using LeitorNFe.services;

string pasta = @"C:\Users\MANUTENÇÃO\Desktop\Validador XML\XML NFE - RBP - 022026";

List<NotaFiscal> notas = new();

if (!Directory.Exists(pasta))
{
    Console.WriteLine("Pasta não encontrada.");
    return;
}

foreach (var arquivo in Directory.GetFiles(pasta, "*.xml"))
{
    try
    {
        var nota = LeitorXmlService.LerNota(arquivo);
        notas.Add(nota);

        Console.WriteLine($"Lido: {nota.Arquivo}");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Erro ao ler {arquivo}: {ex.Message}");
    }
}

Directory.CreateDirectory("output");

RelatorioService.GerarCSV(notas, "output/relatorio_nfe.csv");

var ativas = notas.Where(n => n.Status == "Ativa").ToList();
var canceladas = notas.Where(n => n.Status == "Cancelada").ToList();
var inutilizadas = notas.Where(n => n.Status == "Inutilizada").ToList();
var denegadas = notas.Where(n => n.Status == "Denegada").ToList();

Console.WriteLine("\n================================");
Console.WriteLine("      RESUMO DAS NOTAS NFE");
Console.WriteLine("================================");

Console.WriteLine($"Total de XML lidos: {notas.Count}");
Console.WriteLine($"Notas ativas: {ativas.Count}");
Console.WriteLine($"Notas canceladas: {canceladas.Count}");
Console.WriteLine($"Notas inutilizadas: {inutilizadas.Count}");
Console.WriteLine($"Notas denegadas: {denegadas.Count}");

if (canceladas.Any())
{
    Console.WriteLine("\nNotas Canceladas:");

    foreach (var nota in canceladas)
    {
        Console.WriteLine($"NF {nota.NumeroNota}");
    }
}

if (inutilizadas.Any())
{
    Console.WriteLine("\nNotas Inutilizadas:");

    foreach (var nota in inutilizadas)
    {
        Console.WriteLine($"NF {nota.NumeroNota}");
    }
}

Console.WriteLine("Relatório gerado com sucesso.");