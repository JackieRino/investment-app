import jsPDF from "jspdf";
import { currencyFormatter } from "./currencyFormatter";



export function generatepdf(data) {
    const doc = new jsPDF();

const Formatter= currencyFormatter(data.currency);
    const initialInvestment = data.begInvestment;


    doc.setFontSize(20);
    doc.text("Investment Report", 10, 10);


    doc.setFontSize(12);
    doc.text(`Beginning Investment: ${Formatter.format(data.begInvestment)}`, 10, 30);
    doc.text(`Annual Investment: ${Formatter.format(data.annInvestment)}`, 10, 40);
    doc.text(`Return on Investment: ${data.returnInv}%`, 10, 50);
    doc.text(`Years of Investment: ${data.yearInv}`, 10, 60);


    let yOffset = 80;
    const lineSpacing = 10;
    const pageHeight = doc.internal.pageSize.height;


    data.results.forEach((result) => {


        const totalInterest =
            result.valueEndOfYear -
            result.annualInvest * result.year -
            initialInvestment;


        const investedCap = result.valueEndOfYear - totalInterest;


        const investmentValue = result.valueEndOfYear;


        if (yOffset + 50 > pageHeight) {
            doc.addPage();
            yOffset = 20;
        }


        doc.text(`Year: ${result.year}`, 10, yOffset);


        doc.text(
            `Interest (Year): ${Formatter.format(result.interest)}`,
            10, yOffset + lineSpacing
        );


        doc.text(
            `Interest (Total): ${Formatter.format(totalInterest)}`,
            10, yOffset + 2 * lineSpacing
        );


        doc.text(
            `Invested Capital: ${Formatter.format(investedCap)}`,
            10, yOffset + 3 * lineSpacing
        );


        doc.text(
            `Total Investment Value: ${Formatter.format(investmentValue)}`,
            10, yOffset + 4 * lineSpacing
        );


        yOffset += 60;
    });


    doc.save("Investment Report.pdf");
}
