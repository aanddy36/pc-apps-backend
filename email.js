export const createEmail = (name, email, phone, message) => {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
            display:flex;
            flex-direction:column;
            gap:20px;
          }
          .title-cont{
              background-color: #002c69;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 6px;
              color: #fff;
              padding: 20px 0;
            }
          .title-cont h3{
            font-style:italic;
            }
          .email{
            display: flex;
            flex-direction: column;
            padding:0 20px;
       
            }
          .single{
              display:flex;
            justify-content:space-between;
            align-items:center;
            gap:5px;
            width:fit-content;
          }
          .msj{
              padding:0 20px;
            text-align: justify;
          }
        </style>
      </head>
      <body>
        <div class="container">
            <div class="title-cont">
                <h1>PC APPS</h1>
                <h3>¡Un nuevo usuario quieren contactarse con usted!</h3>
            </div>
            
              <section class="email">
                <div class="single">
                      <h4>Nombre:</h4>
                      <p>${name}</p>
                </div>
                <div class="single">
                      <h4>Email:</h4>
                     <p>${email}</p>
                </div>
                <div class="single">
                      <h4>Teléfono:</h4>
                      <p>${phone}</p>
                </div>
                <div>
                    <h4>Mensaje:</h4>
                    <p class="msj">${message}</p>
                </div>
            </section>
        </div>
      </body>
    </html>
    
    `;
};

