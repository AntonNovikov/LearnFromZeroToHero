from PyPDF2 import PdfReader

reader = PdfReader("C:\\project\\LearnFromZeroToHero\\Python\\tasks\\myfile.pdf")
number_of_pages = len(reader.pages)
page = reader.pages[0]
text = page.extract_text()
print(text)