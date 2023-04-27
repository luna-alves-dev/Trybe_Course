from collections import Counter
from datetime import datetime


class SimpleReport():
    def oldest_expiration_date(list):
        list_date = []
        for product in list:
            list_date.append(product['data_de_fabricacao'])
        return min(list_date)

    def closest_expiration_date(list):
        list_date = []
        today = datetime.today().date()
        for product in list:
            validate = product['data_de_validade']
            if datetime.strptime(validate, "%Y-%m-%d").date() > today:
                list_date.append(validate)
        return min(list_date)

    def bigster_amount_of_product(list):
        list_companies = []
        for product in list:
            list_companies.append(product['nome_da_empresa'])
        company_name = Counter(list_companies).most_common(1)[0][0]
        return company_name

    def generate(list):
        oldest_date = SimpleReport.oldest_expiration_date(list)
        closest_date = SimpleReport.closest_expiration_date(list)
        company_name = SimpleReport.bigster_amount_of_product(list)
        return (
          f"Data de fabricação mais antiga: {oldest_date}\n"
          f"Data de validade mais próxima: {closest_date}\n"
          f"Empresa com mais produtos: {company_name}"
        )
