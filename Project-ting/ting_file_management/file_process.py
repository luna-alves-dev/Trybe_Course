from ting_file_management.file_management import txt_importer
import sys


def process(path_file, instance):
    paths = [instance.search(index)['nome_do_arquivo']
             for index in range(len(instance))]
    if path_file not in paths:
        file = txt_importer(path_file)
        stdout_file = {
            'nome_do_arquivo': path_file,
            'qtd_linhas': len(file),
            'linhas_do_arquivo': file,
        }
        instance.enqueue(stdout_file)
        print(stdout_file, file=sys.stdout)


def remove(instance):
    if instance.__len__() < 1:
        print('Não há elementos')
    else:
        remove = instance.dequeue()
        stdout_remove = remove['nome_do_arquivo']
        print(f'Arquivo {stdout_remove} removido com sucesso')


def file_metadata(instance, position):
    try:
        stdout_metadata = instance.search(position)
        print(stdout_metadata)
    except IndexError:
        print('Posição inválida', file=sys.stderr)
