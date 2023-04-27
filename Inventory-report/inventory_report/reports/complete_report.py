from collections import Counter
from inventory_report.reports.simple_report import SimpleReport


class CompleteReport(SimpleReport):
    def products_stock(list):
        product_list = []
        for item in list:
            product_list.append(item['nome_da_empresa'])
        count_product = Counter(product_list).most_common(100)
        return count_product

    def generate(list):
        stock_list = CompleteReport.products_stock(list)
        final_report = (
            f"{SimpleReport.generate(list)}\n"
            f"Produtos estocados por empresa:\n"
        )
        for item in stock_list:
            final_report += f"- {item[0]}: {item[1]}\n"

        return final_report
