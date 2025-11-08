// Chatbot functionality
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatbox = document.getElementById('chatbox');

// Predefined questions and answers
const chatbotData = {
  "1": "<strong>Student Placement Company:</strong><br> WatchGuard, Lumiq, IBM, Google, Infogain, Zyla, ZopSmart, Virtusa, Vehant, VectorScaler, Testbook, Tata Power, SmartServ, Pentair, Optum, Nagarro, Lucideus, Icertis, Goldman Sachs, BNY Mellon, Thales, AXA XL, Zycus, ZS, Yamaha, DESCO, Wipro, American Express, Samsung, SAP, Protiviti, Paytm, P&S, OLA, NTT, Newgen, Nestle, Naukri, Morgan Stanley, LinkedIn, CISCO, Infosys, IndiaMART, HCL, HashedIn, Godrej, FICO, EY, Ericsson, DXC Technology, Delhivery, Cognizant, Berger Paints, Hitachi, Amazon Web Services, Amazon, Unicommerce, Airtel, Adobe, 99acres, Deloitte, RX Logix, Intuit, ClearTrail, ST.",
  "2": "<strong>Our infrastructure: </strong><br>Jaypee Institute of Information Technology, Noida was established in 2001 and declared as a Deemed University in 2004.",
  "3": "JIIT Campus is spread over a larger area of 73,864.81 square meters.",
  "4": "JIIT has separate facilities for boys and girls with various amenities.",
  "5": "JIIT is equipped with state-of-the-art facilities to develop students’ practical skills.",
  "6": `
  <strong>Courses Offered:Choose Option To know more about it</strong><br>
  (6.1)  Undergraduate B.Tech<br>
  (6.2)  Post Graduate M. Tech<br>
  (6.3)  Integrated B.Tech-M.Tech<br>
  (6.4)  MBA<br>
  (6.5)  Ph.D<br>
  (6.6)  BBA<br>
  (6.7)  M.Sc<br>
  (6.8)  BCA<br>
  (6.9)  B.Sc/B.Sc. (Honours/ Honours with Research)<br>
  (6.10)  MCA<br>
  (6.11)  Diploma Course<br>
`,
  "7": "<strong>Faculty:</strong><br>Dr. Lakhveer Kaur<br>Dr. Ashish Bhatnagar<br>Dr. Parul Arora<br>Mr. Abhay Kumar<br>Prof. Shweta Srivastava<br>Anuradha Pughat<br>",
  "8": "For more information, visit the official [JIIT Website](https://www.jiit.ac.in).",
  "9": "Jaypee Institute of Information Technology (JIIT) is a private deemed-to-be-university, situated in Noida, Gautam Buddha Nagar district, Uttar Pradesh, India.",
  "10": "To Know about Admission Brochure go to this: https://www.jiit.ac.in/sites/default/files/Brochure2024P1.pdf",
  
  "6.1":`<strong>Undergraduate B.Tech</strong><br>
          › Biotechnology (BT) <br>
          ‣ Computer Science And Engineering (CSE) <br>
          > Electronics And Communication Engineering (ECE) <br>
          > Electronics And Computer Engineering (ECE) <br>
          > Electronics Engineering (VLSI Design And Technology) <br>
          > Electronics And Communications (Advanced Communication Technology) <br>
          > Information Technology (IT) <br>
          > Mathematics And Computing (M&C)`,

  "6.2":`<strong>Post Graduate M. Tech</strong><br>
          > Biotechnology(BT)<br>
          > Computer Science & Engineering (CSE) <br>
          > VLSI Design`,

  "6.3":`<strong>Integrated B.Tech-M.Tech</strong><br>
            > Biotechnology (BT) <br>
            > Computer Science And Engineering (CSE) <br>
            > Electronics And Communication <br>
            > Engineering (ECE)`,

  "6.4":`<strong>MBA</strong><br>
            > Marketing Management 
            > Information Technology & Business<br>
            > Analytics<br>
            > Financial Management<br>
            > Financial Service<br>
            > Operations Management<br>
            > Digital Marketing<br>
            > Human Resource Management<br>
            >International Business`,

  "6.5":`<strong>Ph.D</strong><br>
            › Biotechnology<br>
            > Computer Science & Engineering <br>
            > Computer Applications <br>
            > Electronics & Communication Engineering<br>
            > Humanities & Social Sciences<br>
            > Management<br>
            > Mathematics<br>
            > Physics And Materials Science And Engineering.`,

  "6.6":`<strong>BBA</strong><br>
            > Business Mathematics<br> 
            > Managerial Economics <br>
            > Introduction To Sociology<br> 
            > Financial Accounting<br>
            > Principles Of Business Management <br>
            › Business Communication<br>
            > Social Media & Society (Choose One)`,

  "6.7":`<strong>M.Sc</strong><br>
            > Physics
            > Mathematics
            > Microbiology
            > Environmental Biotechnology
            > Economics`,

  "6.8":`<strong>BCA</strong><br>
            > BCA (3 Years)<br>
            > BCA Honours With Research (4 Years)`,

  "6.9":`<strong>B.Sc</strong><br>
            >Computer Science <br>`,

  "6.11":`<strong>Diploma course</strong><br>
            > Computer Science And Information Technology<br>
            > Food Technology<br>
            > Electronics Engineering (Microelectronic)`,
  "6.10":`<strong>MCA</strong><br>
            > 2 Year Full Time Master Of Computer
            Application Programme`,

};
// Function to display a message with different alignment
function displayMessage(sender, message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender === 'You' ? 'user-message' : 'bot-message');
  
  // Use innerHTML for messages that contain HTML tags (like <br>)
  if (message.includes("<br>")) {
    messageDiv.innerHTML = message; // Render HTML content like line breaks
  } else {
    messageDiv.textContent = message;  // Use textContent for plain text
  }

  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

// Function to simulate a simple ML approach for answering
function getResponse(input) {
  // Predefined options mapped to corresponding answers
  const responseMapping = {
    "1": chatbotData["1"],
    "2": chatbotData["2"],
    "3": chatbotData["3"],
    "4": chatbotData["4"],
    "5": chatbotData["5"],
    "6": chatbotData["6"],
    "7": chatbotData["7"],
    "8": chatbotData["8"],
    "9": chatbotData["9"],
    "10": chatbotData["10"],
    "6.1": chatbotData["6.1"],
    "6.2": chatbotData["6.2"],
    "6.3": chatbotData["6.3"],
    "6.4": chatbotData["6.4"],
    "6.5": chatbotData["6.5"],
    "6.6": chatbotData["6.6"],
    "6.7": chatbotData["6.7"],
    "6.8": chatbotData["6.8"],
    "6.9": chatbotData["6.9"],
    "6.10": chatbotData["6.10"],

    // Add more cases for specific responses as needed
  };

  // Check if input matches a key from predefined data
  if (responseMapping[input]) {
    return responseMapping[input];
  } else {
    // Return a generic fallback message if no match is found
    return "Sorry, I didn't understand that. Please select a valid option or ask about something else.";
  }
}

// Function to initialize the chatbot with options
function initializeChatbot() {
  const message = `
    <strong>Bot:</strong> Please select an option:
    <br><br>
    <button class="option-btn" onclick="handleOption(1)">1. Training & Placement</button>
    <button class="option-btn" onclick="handleOption(2)">2. Infrastructure</button>
    <button class="option-btn" onclick="handleOption(3)">3. Campus</button>
    <button class="option-btn" onclick="handleOption(4)">4. Hostel</button>
    <button class="option-btn" onclick="handleOption(5)">5. Labs</button>
    <button class="option-btn" onclick="handleOption(6)">6. Courses</button>
    <button class="option-btn" onclick="handleOption(7)">7. Faculty</button>
    <button class="option-btn" onclick="handleOption(8)">8. College Website</button>
    <button class="option-btn" onclick="handleOption(9)">9. About</button>
    <button class="option-btn" onclick="handleOption(10)">10. Admission</button>
  `;
  displayMessage('Bot', message);
}

// Handle user selection from options
function handleOption(option) {
  // Directly retrieve the corresponding response
  const responseMessage = getResponse(option.toString());
  displayMessage('Bot', responseMessage);
}

// Send button functionality (for free text input)
sendBtn.addEventListener('click', () => {
  const userText = userInput.value.trim();
  if (userText) {
    // Display user message
    displayMessage('You', userText);

    // Get the response from the chatbot system
    const responseMessage = getResponse(userText);

    // Display the bot's response
    displayMessage('Bot', responseMessage);

    // Clear the input field
    userInput.value = '';
  }
});

// Initialize the chatbot when the page loads
initializeChatbot();
