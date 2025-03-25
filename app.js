function addStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .how-it-works {
        max-width: 600px;
        margin: 40px auto;
        font-family: Arial, sans-serif;
      }
  
      .how-it-works-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
      }
  
      .steps-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
  
      .step {
        display: flex;
        align-items: center;
        background: #f8f9fa;
        padding: 30px;
        border-radius: 15px;
        cursor: pointer;
        transition: background 0.3s ease;
      }
  
      .step.active {
        background: #2c4b9b;
        color: #ffffff;
      }
  
      .step-number {
        width: 32px;
        height: 32px;
        background: #2c4b9b;
        color: white;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 20px;
        flex-shrink: 0;
      }
  
      .step.active .step-number {
        background: white;
        color: #2c4b9b;
      }
  
      .step-content {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
  
      .step-title {
        font-size: 16px;
        font-weight: bold;
        margin: 0;
      }
  
      .step-description {
        font-size: 14px;
        color: #e0e0e0;
        display: none;
      }
  
      .step.active .step-description {
        display: block;
      }
    `;
    document.head.appendChild(style);
}

function createStep(number, title, description, isActive, onClick) {
    const step = document.createElement("div");
    step.className = `step ${isActive ? "active" : ""}`;
    step.onclick = () => onClick(number);

    const numberCircle = document.createElement("div");
    numberCircle.className = "step-number";
    numberCircle.textContent = number;

    const stepContent = document.createElement("div");
    stepContent.className = "step-content";

    const stepTitle = document.createElement("h3");
    stepTitle.className = "step-title";
    stepTitle.textContent = title;

    const stepDescription = document.createElement("p");
    stepDescription.className = "step-description";
    stepDescription.textContent = description;

    stepContent.appendChild(stepTitle);
    stepContent.appendChild(stepDescription);

    step.appendChild(numberCircle);
    step.appendChild(stepContent);
    return step;
}

function HowItWorks() {
    const container = document.createElement("div");
    container.className = "how-it-works";

    const title = document.createElement("h2");
    title.className = "how-it-works-title";
    title.textContent = "How it works";
    container.appendChild(title);

    const stepsContainer = document.createElement("div");
    stepsContainer.className = "steps-container";

    let activeStep = 1;

    function renderSteps() {
        stepsContainer.innerHTML = "";
        stepsContainer.appendChild(createStep(1, "Choose your challenge", "Browse our collection of professionally designed projects. Pick one that suits the level you're currently at.", activeStep === 1, setActiveStep));
        stepsContainer.appendChild(createStep(2, "Code the design", "Each project comes with all files included. This means you can focus on coding the project using the design as a reference.", activeStep === 2, setActiveStep));
        stepsContainer.appendChild(createStep(3, "Submit your solution", "Get feedback from the community about your code and see how close you got to the design.", activeStep === 3, setActiveStep));
        stepsContainer.appendChild(createStep(4, "Give others feedback", "Review other people’s solutions and give them feedback to help them improve.", activeStep === 4, setActiveStep));
    }

    function setActiveStep(stepNumber) {
        activeStep = stepNumber;
        renderSteps();
    }

    renderSteps();

    container.appendChild(stepsContainer);
    return container;
}


document.addEventListener("DOMContentLoaded", () => {
    addStyles();
    const app = document.getElementById("app");
    if (app) {
        app.appendChild(HowItWorks());
    }
});