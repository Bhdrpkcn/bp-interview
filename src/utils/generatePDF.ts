import jsPDF from "jspdf";

export const generatePDF = async (
  correctCount: number,
  wrongGrouped: Record<string, { id: string; question: string }[]>,
  passedGrouped: Record<string, { id: string; question: string }[]>
) => {
  const pdf = new jsPDF("p", "mm", "a4");

  const replaceTurkishCharacters = (text: string): string => {
    return text
      .replace(/ş/g, "s")
      .replace(/Ş/g, "S")
      .replace(/ı/g, "i")
      .replace(/İ/g, "I")
      .replace(/ç/g, "c")
      .replace(/Ç/g, "C")
      .replace(/ğ/g, "g")
      .replace(/Ğ/g, "G")
      .replace(/ü/g, "u")
      .replace(/Ü/g, "U")
      .replace(/ö/g, "o")
      .replace(/Ö/g, "O");
  };

  const content = `
    <div style="
        font-family: Arial, sans-serif; 
        padding: 14px; 
        text-align: center;">
        <h1 style="
            font-size: 24px; 
            margin-bottom: 20px; 
            font-weight: bold; 
            color: #333;">
                Quiz Sonuclari
        </h1>

        <div style="
        border: 1px solid #ddd; 
        border-radius: 8px;
        background-color: #f9f9f9;
        margin: 14px;">
        
        <div style="font-size: 18px; color: #28a745; margin-bottom: 16px;">
            Dogru Cevaplar: ${correctCount}
        </div>
        </div>

        <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #e74c3c; border-radius: 8px;">
            <h2 style="font-size: 18px; color: #e74c3c;">Yanlis Cevaplar</h2>
            ${Object.entries(wrongGrouped)
              .map(
                ([category, questions]) => `
            <div style="border-bottom: 1px solid #ddd; padding: 10px; text-align: left;">
                <h3 style="font-size: 16px; font-weight: bold; color: #333;">${replaceTurkishCharacters(
                  category
                )}</h3>
                ${questions
                  .map(
                    (q) =>
                      `<p style="color: #555; margin: 5px 0;">• ${replaceTurkishCharacters(
                        q.question
                      )}</p>`
                  )
                  .join("")}
            </div>
            `
              )
              .join("")}
        </div>

        <div style="padding: 15px; border: 1px solid #f39c12; border-radius: 8px;">
            <h2 style="font-size: 18px; color: #f39c12;">Pas Gecilen Sorular</h2>
            ${Object.entries(passedGrouped)
              .map(
                ([category, questions]) => `
            <div style="border-bottom: 1px solid #ddd; padding: 10px; text-align: left;">
                <h3 style="font-size: 16px; font-weight: bold; color: #333;">${replaceTurkishCharacters(
                  category
                )}</h3>
                ${questions
                  .map(
                    (q) =>
                      `<p style="color: #555; margin: 5px 0;">• ${replaceTurkishCharacters(
                        q.question
                      )}</p>`
                  )
                  .join("")}
            </div>
            `
              )
              .join("")}
        </div>
    </div>
  `;

  pdf.html(content, {
    callback: (pdf) => {
      pdf.save("quiz-sonuclari.pdf");
    },
    x: 10,
    y: 10,
    width: 190,
    windowWidth: 600,
  });
  // return new Promise<Blob>((resolve) => {
  //   pdf.html(content, {
  //     callback: (pdf) => {
  //       const pdfBlob = pdf.output("blob"); // Convert to Blob
  //       resolve(pdfBlob);
  //     },
  //     x: 10,
  //     y: 10,
  //     width: 190,
  //     windowWidth: 600,
  //   });
  // });
};
