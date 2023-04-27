import pytest
from challenges.challenge_encrypt_message import encrypt_message


def test_encrypt_message():
    with pytest.raises(TypeError):
        encrypt_message("45678", "asdfg")

    with pytest.raises(TypeError):
        encrypt_message(5, 9876)

    assert encrypt_message("Namoro", 7) == "oromaN"
    assert encrypt_message("Namoro", 5) == "romaN_o"
    assert encrypt_message("Namoro", 4) == "or_omaN"
