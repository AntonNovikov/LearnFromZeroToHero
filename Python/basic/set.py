def remove_all_elements(num_set):
    while num_set:
        num_set.pop()
    return num_set


num_set = set([0, 1, 3, 4, 5])
print("Исходное множество:")
print(num_set)
print("\nПосле удаления всех элементов:")
print(remove_all_elements(num_set))