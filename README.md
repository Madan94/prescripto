# **Zypher** - Prescriptions on Blockchain

<img src="https://github.com/Madan94/zypher/blob/main/src/assets/logo.png" alt="Zypher-logo" width="600"/>

## Secure Digital Prescription System for Hospitals & Pharmacies

Zypher aims to revolutionize prescriptions by creating a **secure, paperless prescription system**:

- Doctors generate prescriptions using their **digital signature** by their wallet, preventing forgery and ensuring authenticity.  
- Each prescription is stored on a **IPFS Storage** which create a unique **CID** and it will based to Smart Contracts on Avalanche C-Chain.
- Smart Contract will create a unique **Prescription ID** and Store it along with **CID**, **TimeStamp** on the block. So the prescription will eadily verified with Prescription ID and get the list from CID.
- At last, It will genearate a **QR Code** whicjh contains Patient Wallet, Doctor Wallet and Prescription ID for Verification and Authenticity of Medicines.
- Pharmacies will scan the QR Code and ask permission to accept the request from Patient Wallet. Once the Patient Accepted, it will be updated in Pharmacy Dashboard. 
- Patients can access their prescriptions anytime via a secure mobile app and allow access to anyone which inidcates **Own your Data**.
- Hopitals can see list of doctors, Edit Informations, View Prescriptions list signed by doctors having full transaparncey and Authenticity.


## Architecture Diagram

<img src="https://github.com/Madan94/zypher/blob/main/src/assets/architecture.png" alt="Landing" width="1200" />

---

## Content Overview <a name="content-overview"></a>

- [Project Vision](#project-vision)  
- [Technologies Used](#technologies-used)  
- [Getting Started](#getting-started)  
- [Project Overview](#project-overview)  
- [Key Features](#key-features)  
- [Team Fsociety](#team-zypher)  
- [Hackathons and Events](#hackathons-and-events)  
- [License](#license)  
- [Contact](#contact)  

---

## Project Vision <a name="project-vision"></a>

Our vision is to create a secure, transparent, and decentralized prescription management system that empowers doctors and patients with trust and authenticity through blockchain technology.

[⬆️ Back to Top](#zypher---Prescriptions-on-Blockchain)

<img src="https://github.com/Madan94/zypher/blob/main/src/assets/mobiledownload.png" alt="mobiledownload" width="1200"/>

---

## Technologies Used <a name="technologies-used"></a>

<img src="https://github.com/Madan94/zypher/blob/main/src/assets/techstack.png" alt="Tech Stack" width="1200"/>

| Tech stack         | Technology used                                                                               |
|--------------------|---------------------------------------------------------------------------------------------|
| **Blockchain**     | ![Solidity](https://img.shields.io/badge/Solidity-363636?logo=solidity&logoColor=white)     |
|                    | ![Avalanche](https://img.shields.io/badge/Avalanche-E84142?logo=avalanche&logoColor=white)  |
| **Frontend**       | ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)        |
|                    | ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)              |
|                    | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white) |
| **Backend**        | ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)        |
|                    | ![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)     |
| **Database**       | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)        |
|                    | ![IPFS](https://img.shields.io/badge/IPFS-000000?logo=ipfs&logoColor=white)                 |
| **Deployment**     | ![Render](https://img.shields.io/badge/Render-19232D?logo=render&logoColor=white)            |
|                    | ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)           |
| **Other**          | ![Web3](https://img.shields.io/badge/Web3-FF6C00?logo=ethereum&logoColor=white)             |

[⬆️ Back to Top](#zypher---Prescriptions-on-Blockchain)

---

## Getting Started <a name="getting-started"></a>

### Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Madan94/zypher.git
    cd zypher
    ```

2. **Dowload all the Project Dependencies**
    ```bash
    npm install
    ```

3. **Start the Development Server**
    ```bash
    npm run dev
    ```
4. **Backend Repo Link**
    Repo link - [https://github.com/PRIEYAN/doc-block-backend](https://github.com/PRIEYAN/zypher-backend)
    ```bash
    npm install
    node server.js
    ```

[⬆️ Back to Top](#zypher---Prescriptions-on-Blockchain)

---

## Project Overview <a name="project-overview"></a>

Zypher leverages blockchain technology to ensure the security and integrity of medical prescriptions. It provides a decentralized platform where doctors can generate, sign, and manage prescriptions while patients can securely access their medical records.

[⬆️ Back to Top](#zypher---Prescriptions-on-Blockchain)

---

## Key Features <a name="key-features"></a>

- **Blockchain Integration:**  
  Utilizes blockchain to store prescription data, ensuring tamper-proof records.

- **User Authentication:**  
  Employs secure wallet-based login mechanisms to protect user data.

- **Prescription Management:**  
  Allows healthcare professionals to generate, view, and manage prescriptions efficiently.

- **Patient Records:**  
  Enables patients to access their prescription history securely.

[⬆️ Back to Top](#zypher---Prescriptions-on-Blockchain)

## Screenshots <a name="screenshots"></a>

## 📸 Screenshots

<table>
  <thead>
    <tr>
      <th>Landing Page</th>
      <th>Role Selection</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://github.com/Madan94/zypher/blob/main/assests/landing.jpeg" alt="Landing" width="500" /></td>
      <td><img src="https://github.com/Madan94/zypher/blob/main/assests/role.jpeg" alt="Role" width="500" /></td>
    </tr>
  </tbody>
  
  <thead>
    <tr>
      <th>About Zypher</th>
      <th>Pharmacy Core</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://github.com/Madan94/zypher/blob/main/assests/abtzypher.jpeg" alt="About Zypher" width="500" /></td>
      <td><img src="https://github.com/Madan94/zypher/blob/main/assests/corephar.jpeg" alt="Pharmacy Core" width="500" /></td>
    </tr>
  </tbody>
  
  <thead>
    <tr>
      <th>Doctor Core</th>
      <th>Hospital Core</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://github.com/Madan94/zypher/blob/main/assests/corepres.jpeg?raw=true" alt="Doctor Core" width="500" /></td>
      <td><img src="https://github.com/Madan94/zypher/blob/main/assests/corehos.jpeg" alt="Hospital Core" width="500" /></td>
    </tr>
  </tbody>
</table>



[⬆️ Back to Top](#zypher---Prescriptions-on-Blockchain)

---

## Team Fsociety <a name="team-zypher"></a>

- **Madhanraj M** – Team Lead, Full Stack & Web3 Developer  
- **Prieyan MN** – Backend Developer  
- **Madesh Vaithya H** – Frontend & App Developer  
- **Rishika K** – Research & Development  

[⬆️ Back to Top](#zypher---Prescriptions-on-Blockchain)

---

## Hackathons and Events <a name="hackathons-and-events"></a>

- Participated in **Avalanche Team1 Web3 Hackathon** at MCC Innovation Park, Chennai.

[⬆️ Back to Top](#zypher---Prescriptions-on-Blockchain)

---

## License <a name="license"></a>

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Madan94/zypher/blob/main/LICENSE) file for details.

[⬆️ Back to Top](#zypher---Prescriptions-on-Blockchain)

---

## Contact <a name="contact"></a>

For any inquiries or support, feel free to reach out:

- **Email:** [![Email](https://img.shields.io/badge/Connect-email?logo=mail)](mailto:madhanwebdev94@gmail.com)  
- **LinkedIn:**  
**Madhanraj M** - [![LinkedIn](https://img.shields.io/badge/Connect-LinkedIn-blue?logo=linkedin)](https://www.linkedin.com/in/madhan-fullstack-developer/)  
**Prieyan M N** - [![LinkedIn](https://img.shields.io/badge/Connect-LinkedIn-blue?logo=linkedin)](https://www.linkedin.com/in/prieyanmn2007/)
  <br/>
**Madesh Vaithya H** - [![LinkedIn](https://img.shields.io/badge/Connect-LinkedIn-blue?logo=linkedin)](https://www.linkedin.com/in/madesh-vaithya-app-developer/)

---

<img src="https://github.com/Madan94/zypher/blob/main/src/assets/thankyou.png" alt="thankyou" width="1200"/>

---

[⬆️ Back to Top](#zypher---Prescriptions-on-Blockchain)

---

*Made with ❤️ by Team FSociety🔥.*
