from src.insights.jobs import read


def get_max_salary(path):
    salary_jobs = read(path)
    salary = []
    for job in salary_jobs:
        if job['max_salary'].isnumeric():
            salary.append(int(job["max_salary"]))
    return max(salary)


def get_min_salary(path):
    salary_jobs = read(path)
    salary = []
    for job in salary_jobs:
        if job['min_salary'].isnumeric():
            salary.append(int(job["min_salary"]))
    return min(salary)


def matches_salary_range(job, salary):
    try:
        max = job["max_salary"]
        min = job["min_salary"]

        if str(max).isalpha() or str(min).isalpha() or int(max) < int(min):
            raise ValueError
        return int(min) <= int(salary) <= int(max)

    except (KeyError, TypeError):
        raise ValueError


def filter_by_salary_range(jobs, salary):
    filter_by_salary = []
    try:
        for job in jobs:
            max = job["max_salary"]
            min = job["min_salary"]
            if int(min) <= int(salary) <= int(max):
                filter_by_salary.append(job)
    except TypeError:
        raise ValueError
    finally:
        return filter_by_salary
# The finally keyword is used in try...except blocks.
# It defines a block of code to run when the try
# ...except...else block is final.
