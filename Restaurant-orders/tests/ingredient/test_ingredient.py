from src.models.ingredient import Ingredient


# Req 1
def test_ingredient():

    ingrediente = Ingredient("queijo gorgonzola")
    assert repr(ingrediente) == "Ingredient('queijo gorgonzola')"

    ingrediente = Ingredient("farinha")
    assert isinstance(ingrediente, Ingredient)

    ingrediente = Ingredient("queijo parmesão")
    assert len(ingrediente.restrictions) == 2

    ingredienteA = Ingredient("camarão")
    ingredienteB = Ingredient("camarão")
    ingredienteC = Ingredient("carne")
    assert hash(ingredienteA) != hash(ingredienteC)
    assert hash(ingredienteA) == hash(ingredienteB)

    ingredienteA = Ingredient("presunto")
    ingredienteB = Ingredient("presunto")
    ingredienteC = Ingredient("massa de lasanha")
    assert ingredienteA != ingredienteC
    assert ingredienteA == ingredienteB
    assert ingredienteC.name == "massa de lasanha"
