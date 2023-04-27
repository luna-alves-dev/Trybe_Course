from typing import List, Dict
from src.insights.jobs import read


def get_unique_industries(path):
    industry_jobs = read(path)
    job_industries = [job["industry"] for job in industry_jobs]
    return list(filter(any, set(job_industries)))


def filter_by_industry(jobs: List[Dict], industry: str):
    job_industries_filtered = []
    for job in jobs:
        if job['industry'] == industry:
            job_industries_filtered.append(job)
    return job_industries_filtered
