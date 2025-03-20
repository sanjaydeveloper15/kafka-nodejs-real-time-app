# **Kafka Node.js Real-Time App - Education Funda**

A real-time application project showcasing the integration of Docker, Kafka, and Node.js with TypeScript to enable seamless message sending and receiving in a dynamic environment.  

<p align="center">
  <img src="https://image.ibb.co/nAd9OF/logos.png" alt="Node TypeScript - Education Funda"/>
</p>

---

## **🌟 Overview**
This project is designed to demonstrate a scalable and efficient real-time messaging system using Kafka. It combines the power of Docker for containerization, Kafka for message brokering, and TypeScript for building robust, type-safe Node.js applications.  

---

## **🛠 Requirements**

Before running the application, ensure you have the following installed:

- **Node.js** (LTS version recommended)  
- **Docker and Docker Compose** (to set up Kafka and Zookeeper)  
- **TypeScript** (for compiling and running TypeScript code)  

---

## **🚀 Features**

- 📡 **Real-Time Messaging**: Enables dynamic message publishing and consumption.  
- 🛠 **Dockerized Environment**: Kafka, Zookeeper, and the application are containerized for easy setup and deployment.  
- 🌐 **REST APIs**: Provides user-friendly endpoints for interaction.  
- 🧩 **Type-Safe Code**: Built with TypeScript to ensure maintainability and scalability.  
- 🔄 **Kafka Producer & Consumer**: Demonstrates both message production and consumption with practical examples.  

---

## **📦 Setup Instructions**

1. Clone the repository:  
   ```bash
   git clone https://github.com/sanjaydeveloper15/kafka-nodejs-real-time-app
   cd kafka-nodejs-real-time-app
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start Dockerized Kafka & Zookeeper:  
   ```bash
   docker-compose up -d
   ```

4. Start the application:  
   ```bash
   npm run dev
   ```

---

## **🌀 What is TypeScript?**

**TypeScript** is an open-source programming language developed by Microsoft. It extends JavaScript by adding static types, improving error detection, and enabling the development of scalable applications. With TypeScript, you gain:
- Better code quality and maintainability.
- Enhanced productivity with type safety.
- Improved debugging and error prevention.

---

## **🧪 Example REST Endpoints**

Here are some sample REST API endpoints provided by the application:  

- **Send Message**:  
   ```
   POST /api/producer
   Body: { "message": "Hello Kafka" }
   ```
---

## **📊 Real-Time Architecture**

### **Components**:
- **Producer**: Sends messages to the Kafka topic.  
- **Consumer**: Receives and processes messages from the Kafka topic.  
- **Dockerized Kafka & Zookeeper**: Ensures smooth communication between producer and consumer.

---

## **❤️ Found this project useful?**

If you found this project helpful, you can:
- **Star this repository on GitHub** to show your support!  
- **Share it with your network** to help others discover this resource.  
- **Connect with me** on Twitter [@sanjaykumarwebs](https://twitter.com/sanjaykumarwebs) for feedback or questions.

---

## **📉 Average Use Case - Educational Example**

Let’s take an example of an **Education Platform**:
1. **Real-time Notifications**: Teachers can publish notifications to Kafka, and students receive them instantly.  
2. **Assignments**: Kafka ensures reliable communication between microservices, such as assignment distribution and submission handling.

---

## **🛑 Troubleshooting**

- **Kafka not starting?** Ensure Docker is installed and `docker-compose.yml` is properly configured.  
- **Message not consumed?** Verify the consumer is subscribed to the correct topic and partitions.  


## **💡 Recommended Tools and Resources**

- 🔧 [Visual Studio Code](https://code.visualstudio.com/download): A powerful IDE to write and debug TypeScript.  
- 📚 [KafkaJS Documentation](https://kafka.js.org/): An excellent resource for working with Kafka in Node.js.  
- 🎥 [Education Funda (YouTube)](https://www.youtube.com/@EducationFundaIndia): Tutorials and educational content.  
- 🌐 [Sanjay Kumar (Portfolio)](https://sanjaydeveloper.netlify.app/): Learn more about the developer.  

