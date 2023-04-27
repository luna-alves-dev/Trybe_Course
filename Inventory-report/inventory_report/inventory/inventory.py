import csv
import json
import xml.etree.ElementTree as ET


from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory():
    def read_csv(path):
        result = []
        with open(path, "r") as file:
            file_csv = csv.DictReader(file)

            for item in file_csv:
                result.append(item)

        return result

    def read_json(path):
        with open(path) as file:
            file_json = json.load(file)
            return file_json

    def read_xml(path):
        result = []

        produto = "nome_do_produto"
        empresa = "nome_da_empresa"
        fabricacao = "data_de_fabricacao"
        validade = "data_de_validade"
        serie = "numero_de_serie"

        with open(path) as file:
            for child in ET.parse(file).getroot():
                result.append(
                    {
                        "id": child.find("id").text,
                        "nome_do_produto": child.find(produto).text,
                        "nome_da_empresa": child.find(empresa).text,
                        "data_de_fabricacao": child.find(fabricacao).text,
                        "data_de_validade": child.find(validade).text,
                        "numero_de_serie": child.find(serie).text,
                        "instrucoes_de_armazenamento": child.find(
                            "instrucoes_de_armazenamento"
                        ).text,
                    }
                )

        return result

    def import_data(path, type):
        data = []
        if path.endswith('.csv'):
            data = Inventory.read_csv(path)
        if path.endswith('.json'):
            data = Inventory.read_json(path)
        if path.endswith('.xml'):
            data = Inventory.read_xml(path)

        if type == 'simples':
            return SimpleReport.generate(data)
        else:
            return CompleteReport.generate(data)
