def is_anagram(first_string, second_string):
    first_string = first_string.lower()
    first_string = merge_string(list(first_string))
    second_string = second_string.lower()
    second_string = merge_string(list(second_string))

    it_is_anagram = first_string == second_string and (
        first_string != "" and second_string != ""
    )
    return (first_string, second_string, it_is_anagram)


# obrigada course!!
def merge_string(string, inicial=0, final=None):
    if final is None:
        final = len(string)

    if final - inicial > 1:
        middle = (inicial + final) // 2
        merge_string(string, inicial, middle)
        merge_string(string, middle, final)
        string = merge(string, inicial, middle, final)

    return "".join(string)


def merge(string, inicial, middle, final):
    left_side = string[inicial:middle]
    right_side = string[middle:final]

    left_i = 0
    right_i = 0

    for index in range(inicial, final):
        if left_i >= len(left_side):
            string[index] = right_side[right_i]
            right_i += 1
        elif right_i >= len(right_side):
            string[index] = left_side[left_i]
            left_i += 1
        elif left_side[left_i] < right_side[right_i]:
            string[index] = left_side[left_i]
            left_i += 1
        else:
            string[index] = right_side[right_i]
            right_i += 1

    return string
