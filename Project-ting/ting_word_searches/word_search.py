from ting_file_management.queue import Queue


def exists_word(word, instance: Queue):
    file_word = instance.search(0)
    lines_file = file_word["linhas_do_arquivo"]
    array = []
    result = {
        "palavra": word,
        "arquivo": file_word["nome_do_arquivo"],
        "ocorrencias": [
            {
                "linha": index + 1
            } for index, file in enumerate(lines_file)
            if word.lower() in file.lower()
        ]
    }

    if len(result["ocorrencias"]) > 0:
        array.append(result)

    return array


def search_by_word(word, instance: Queue):
    file_word = instance.search(0)
    array = []
    result = {
        "palavra": word,
        "arquivo": file_word["nome_do_arquivo"],
        "ocorrencias": [
            {
                "linha": index + 1, "conteudo": file
            } for index, file in enumerate(file_word["linhas_do_arquivo"])
            if word.lower() in file.lower()
        ]
    }

    if len(result["ocorrencias"]) > 0:
        array.append(result)

    return array
