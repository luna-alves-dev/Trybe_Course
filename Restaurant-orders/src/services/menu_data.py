from src.models.dish import Dish
from src.models.ingredient import Ingredient
import pandas as pd


# Req 3
class MenuData:
    def __init__(self, source_path) -> set:
        self.dishes = self._load_item(source_path)

    def _load_item(self, source_path) -> set:
        item = dict()
        dataFrame = pd.read_csv(source_path)
        for product, method, ingredient, quantity in dataFrame.itertuples(
            index=False
        ):
            if product not in item:
                item[product] = Dish(product, method)
            ingredient_item = Ingredient(ingredient)
            item[product].add_ingredient_dependency(ingredient_item, quantity)
        return set(item.values())
