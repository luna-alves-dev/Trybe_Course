from abc import ABC, abstractmethod
from inventory_report.inventory.inventory import Inventory


class Importer(ABC):

    @abstractmethod
    def import_data(path: str):
        return Inventory.import_data(path)
