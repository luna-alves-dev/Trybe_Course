from functools import lru_cache
from typing import List, Dict
import csv


@lru_cache
def read(path):
    with open(path) as jobs_file:
        open_cvs = csv.DictReader(jobs_file)
        job_list = []
        for job in open_cvs:
            job_list.append(job)

        return job_list


def get_unique_job_types(path):
    list_jobs = read(path)
    type = [job["job_type"] for job in list_jobs]
    return list(set(type))


def filter_by_job_type(jobs: List[Dict], job_type: str):
    job_type_filtered = []
    for job in jobs:
        if job['job_type'] == job_type:
            job_type_filtered.append(job)
    return job_type_filtered
