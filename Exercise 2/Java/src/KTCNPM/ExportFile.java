/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package KTCNPM;

/**
 *
 * @author haibk
 */
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import javafx.scene.layout.Border;

public class ExportFile {

    public void exportFile(ArrayList<String> list, ArrayList<String> listTAW, ArrayList<String> listTBF,
        ArrayList<String> listTCF, ArrayList<String> listEF, ArrayList<String> listG) throws IOException {
        Document document = new Document();

        try {
            String fileSRC = "E:\\KTCNPM.pdf";
            File file = new File(fileSRC);
            if(file.exists()){
                file.delete();
            }
            else{
                file.createNewFile();
            }

            PdfWriter.getInstance(document, new FileOutputStream(fileSRC));
            document.open();

            Font f1 = new Font(BaseFont.createFont("/newpackage/vuArialBold.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED));
            Font f2 = new Font(BaseFont.createFont("/newpackage/vuArial.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED));
            f2.setSize(9);
            f1.setSize(13);

            Paragraph paragraph2 = new Paragraph("", f2);
            Paragraph paragraph3 = new Paragraph();

            paragraph2.setIndentationLeft(80);
            paragraph2.setIndentationRight(80);
            paragraph2.setAlignment(Element.ALIGN_LEFT);
            paragraph2.setSpacingAfter(15);

            Phrase phrase2 = new Phrase("Tên phần mềm: Tính chi phí phần mềm");
            Phrase phrase3 = new Phrase(" ");
            paragraph3.add(phrase3);
            paragraph2.add(phrase2);

            //Phu luc 3
            Phrase phrase5 = new Phrase("Phụ lục III: Bảng tính toán điểm các tác nhân (actors) tương tác, trao đổi thông tin");
            Paragraph paragraph5 = new Paragraph("", f1);
            paragraph5.setIndentationLeft(80);
            paragraph5.setIndentationRight(80);
            paragraph5.setAlignment(Element.ALIGN_CENTER);
            paragraph5.setSpacingAfter(10);
            paragraph5.add(phrase5);

            document.add(paragraph5);
            document.add(paragraph2);

            PdfPTable table3 = new PdfPTable(5);
            
            table3.setWidthPercentage(400 / 5.23f);
            table3.setWidths(new int[]{1, 5, 3, 2, 3});
            for (int i = 0; i < listTAW.size(); i++) {
                Paragraph p = new Paragraph(listTAW.get(i), f2);
                PdfPCell data = new PdfPCell(p);
                table3.addCell(data);
            }
            document.add(table3);
            document.add(paragraph3);
            document.add(paragraph3);
            document.add(paragraph3);

            // phu luc 4
            Phrase phrase41 = new Phrase("Phụ lục IV: Bảng tính toán điểm các trường hợp sử dung (use case)");
            Paragraph paragraph41 = new Paragraph("", f1);
            paragraph41.setIndentationLeft(80);
            paragraph41.setIndentationRight(80);
            paragraph41.setAlignment(Element.ALIGN_CENTER);
            paragraph41.setSpacingAfter(10);
            paragraph41.add(phrase41);

            document.add(paragraph41);
            document.add(paragraph2);

            PdfPTable table4 = new PdfPTable(4);
            table4.setWidthPercentage(400 / 5.23f);
            table4.setWidths(new int[]{1, 3, 3, 4});
            for (int i = 0; i < listTBF.size(); i++) {
                PdfPCell data = new PdfPCell(new Paragraph(listTBF.get(i), f2));
                table4.addCell(data);
            }
            document.add(table4);
            document.add(paragraph3);
            document.add(paragraph3);
            document.add(paragraph3);
            
            // phu luc 5
            Phrase phrase51 = new Phrase("Phụ lục V: Bảng tính toán hệ số phức tạp kỹ thuật - công nghệ");
            Paragraph paragraph51 = new Paragraph("", f1);
            paragraph51.setIndentationLeft(80);
            paragraph51.setIndentationRight(80);
            paragraph51.setAlignment(Element.ALIGN_CENTER);
            paragraph51.setSpacingAfter(10);
            paragraph51.add(phrase51);

            document.add(paragraph51);
            document.add(paragraph2);

            PdfPTable table5 = new PdfPTable(5);
            table5.setWidthPercentage(400 / 5.23f);
            table5.setWidths(new int[]{1, 6, 2, 2, 2});
            for (int i = 0; i < listTCF.size(); i++) {
                PdfPCell data = new PdfPCell(new Paragraph(listTCF.get(i), f2));
                table5.addCell(data);
            }
            document.add(table5);
            document.add(paragraph3);
            document.add(paragraph3);
            document.add(paragraph3);
           
            //phu luc 6
            Phrase phrase61 = new Phrase("Phụ lục VI: Bảng tính toán hệ số tác động môi trường và nhóm làm việc, hệ số phức tạp về môi trường");
            Paragraph paragraph61 = new Paragraph("", f1);
            paragraph61.setIndentationLeft(80);
            paragraph61.setIndentationRight(80);
            paragraph61.setAlignment(Element.ALIGN_CENTER);
            paragraph61.setSpacingAfter(10);
            paragraph61.add(phrase61);

            document.add(paragraph61);
            document.add(paragraph2);

            PdfPTable table6 = new PdfPTable(6);
            table6.setWidthPercentage(400 / 5.23f);
            table6.setWidths(new int[]{1, 6, 2, 2, 2, 3});
            for (int i = 0; i < listEF.size(); i++) {
                PdfPCell data = new PdfPCell(new Paragraph(listEF.get(i), f2));
                table6.addCell(data);
            }
            document.add(table6);
            document.add(paragraph3);
            document.add(paragraph3);
            document.add(paragraph3);
            
            //phu luc 7
            Phrase phrase7 = new Phrase("Phụ lục VII: Bảng tính toán giá trị phần mềm");
            Paragraph paragraph7 = new Paragraph("", f1);
            paragraph7.setIndentationLeft(80);
            paragraph7.setIndentationRight(80);
            paragraph7.setAlignment(Element.ALIGN_CENTER);
            paragraph7.setSpacingAfter(10);
            paragraph7.add(phrase7);

            document.add(paragraph7);
            document.add(paragraph2);

            PdfPTable table7 = new PdfPTable(5);
            table7.setWidthPercentage(400 / 5.23f);
            table7.setWidths(new int[]{1, 5, 5, 4, 2});
            for (int i = 0; i < listG.size(); i++) {
                PdfPCell data = new PdfPCell(new Paragraph(listG.get(i), f2));
                table7.addCell(data);
            }
            document.add(table7);
            document.add(paragraph3);
            document.add(paragraph3);
            document.add(paragraph3);
            
            // phu luc 8
            Paragraph paragraph1 = new Paragraph("", f1);
            paragraph1.setIndentationLeft(80);
            paragraph1.setIndentationRight(80);
            paragraph1.setAlignment(Element.ALIGN_CENTER);
            paragraph1.setSpacingAfter(10);
            Phrase phrase1 = new Phrase("Phụ lục VIII: Bảng tổng hợp chi phí phần mềm");
            paragraph1.add(phrase1);
            document.add(paragraph1);
            document.add(paragraph2);
            PdfPTable table = new PdfPTable(5);
            table.setWidthPercentage(400 / 5.23f);
            table.setWidths(new int[]{1, 5, 3, 4, 2});

            for (int i = 0; i < list.size(); i++) {
                PdfPCell data = new PdfPCell(new Paragraph(list.get(i), f2));
                table.addCell(data);
            }
            document.add(table);
            document.close();

        } catch (DocumentException | FileNotFoundException e) {
        }
    }

}
