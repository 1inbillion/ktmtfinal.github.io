function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "hi") {
        return "Hey whatsup!";
    } else if (input == "bye") {
        return "Talk to you later!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "yes"){
        return "We have 1. TMT REBARS 2. WIRE RODS and OIL RODS 3. BINDING WIRES. Please select the product number to know more.";
    }else if(input == "1") {
        return "Available sizes of TMT REBARS : 25mm, 20mm, 16mm, 10mm, 8mm, 7mm, 6mm. For more sizes and prices, Please visit our branch. ";
    } else if (input == "2") {
        return "Available sizes of WIRERODS and OILRODS : 5mm, 4.8mm, 4.35mm, 4.2mm, 4.0mm, 3.5mm, 3.0mm, 2.4mm. For more sizes and prices, Please visit our branch.";
    } else if (input == "3"){
        return "We supply BINDING WIRES of different weight packages : 5kg, 10kg, 25kg, 30kg. For more details and prices, Please visit our branch. ";
    } else if (input == "ok"){
        return "Thank you, Do you need anything";
    } else if (input == "no"){
        return "Thank you. visit again";
    } else if (input == "I Love KTMT"){
        return "Thank you. We love our customers too";
    } else {
        return "Try asking something else!";
    }
    
}