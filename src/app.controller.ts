import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('content-type', 'text/html')
  getHello(): string {
    return `<!-- 
    Online HTML, CSS and JavaScript editor to run code online.
    -->
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Meditrail</title>
    </head>
    
      <style> 
        body {
        width: 100vw; 
          height: 100vh; 
          display: flex; 
          justify-content: center
        }
      .main{
          width: 300px; 
          height: 150px; 
          border: 2px solid #0066ff;
          display: flex; 
          flex-direction: column; 
          justify-content: center;
          align-items: center
        }
      </style>
      
    <body>
      <div class = 'main'>
        <p> Welcome to <strong> MEDITRAIL</strong></p>
        <p> Head to <a href='http://localhost:5000/swagger'> Swagger UI</a>
          for API documentation.
      </div>
      <script src="script.js"></script>
    </body>
    
    </html>`;
  }
}
