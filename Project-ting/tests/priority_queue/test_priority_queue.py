from ting_file_management.priority_queue import PriorityQueue
import pytest

mock_files = [
    {
        'nome_do_arquivo': 'mame_one.txt',
        'qtd_linhas': 12,
        'linhas_do_arquivo': ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5',
                              'Line 6', 'Line 7', 'Line 8', 'Line 9',
                              'Line 10', 'Line 11', 'Line 12', 'Line 13'],
    },
    {
        'nome_do_arquivo': 'name_two.txt',
        'qtd_linhas': 3,
        'linhas_do_arquivo': ['Line 1', 'Line 2', 'Line 3', 'Line 4'],
    },
    {
        'nome_do_arquivo': 'name_three.txt',
        'qtd_linhas': 4,
        'linhas_do_arquivo': ['Line 1', 'Line 2', 'Line 3', 'Line 4',
                              'Line 5'],
    },
    {
        'nome_do_arquivo': 'name_four.txt',
        'qtd_linhas': 2,
        'linhas_do_arquivo': ['Line 1', 'Line 2', 'Line 3'],
    },
]


def test_basic_priority_queueing():
    queue = PriorityQueue()
    assert len(queue) == 0

    for file_data in mock_files:
        queue.enqueue(file_data)

    assert len(queue) == len(mock_files)
    assert queue.search(0) == mock_files[1]
    assert queue.search(1) == mock_files[2]
    assert queue.search(2) == mock_files[3]
    assert queue.search(3) == mock_files[0]
    assert queue.dequeue() == mock_files[1]
    assert queue.dequeue() == mock_files[2]
    assert queue.dequeue() == mock_files[3]
    assert queue.dequeue() == mock_files[0]

    with pytest.raises(IndexError):
        queue.search(10)
