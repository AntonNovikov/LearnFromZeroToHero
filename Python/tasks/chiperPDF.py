from PyPDF2 import PdfWriter, PdfReader
out = PdfWriter()
# file = PdfReader("myfile.pdf")
file = PdfReader("C:\\project\\LearnFromZeroToHero\\Python\\tasks\\myfile.pdf")
print(file)
# num = file.numPages
num = len(file.pages)
print(num)
for idx in range(num):
    # page = file.getPage(idx)
    page = file.pages[idx]
    # out.addPage(page)
    out.add_page(page)
password = "pass"
with open("C:\\project\\LearnFromZeroToHero\\Python\\tasks\\myfile_encrypted.pdf", "wb") as f: out.write(f)