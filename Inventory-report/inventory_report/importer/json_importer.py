import os
import json
from inventory_report.importer.importer import Importer


class JsonImporter(Importer):
    @classmethod
    def import_data(self, filename):
        _, file_json = os.path.splitext(filename)
        if file_json == ".json":
            with open(filename, "r") as file:
                products = json.load(file)
                return list(products)
        else:
            raise ValueError("Arquivo inválido")
