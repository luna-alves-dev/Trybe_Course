from src.models.dish import Dish
from src.models.ingredient import Ingredient
import pytest


# Req 2
def test_dish():
    itemA = Dish("massa de ravioli", 19.00)
    itemB = Dish("massa de ravioli", 21.00)
    assert hash(itemA) != hash(itemB)

    itemA = Dish("queijo parmesão", 9.00)
    itemB = Dish("queijo parmesão", 10.00)
    assert hash(itemA) == hash(itemA)

    item = Dish("salmão", 98.00)
    assert item.name == "salmão"

    itemA = Dish("creme de leite Trybe", 12.00)
    assert itemA == itemA

    itemB = Dish("creme de leite Trybe", 12.00)
    assert itemA == itemB

    itemC = Dish("caldo de carne", 8.00)
    assert itemA != itemC

    creme_de_leite = Ingredient("queijo xablau")
    item.add_ingredient_dependency(creme_de_leite, 3)
    assert item.get_ingredients() == set([creme_de_leite])

    item = Dish("camarão", 60.00)
    assert len(item.get_restrictions()) == 0

    item = Dish("frango", 26.00)
    assert repr(item) == "Dish('frango', R$26.00)"
    with pytest.raises(TypeError):
        Dish("frango")
    with pytest.raises(ValueError):
        Dish("carne", -4)
