
document.querySelector('.showProfile').addEventListener('click', () =>
    document.querySelector('.right').innerHTML =
    `<h1>My Profile</h1>
            <div class="card">
                <div class="row">
                    <span class="label">Name</span>
                    <span class="value">TestUser 1</span>
                </div>
                <div class="row">
                    <span class="label">Student ID</span>
                    <span class="value">24SS1A0500</span>
                </div>
                <div class="row">
                    <span class="label">Department</span>
                    <span class="value">CSE</span>
                </div>
                <div class="row">
                    <span class="label">Semester</span>
                    <span class="value">S4</span>
                </div>
                <div class="row">
                    <span class="label">Phone Number</span>
                    <span class="value">+91 12345 67890</span>
                </div>
                <div class="row">
                    <span class="label">Mess</span>
                    <span class="value">BOYS HOSTEL 1</span>
                </div>
                <div class="row">
                    <span class="label">Current Bill</span>
                    <span class="value">Rs. 1234</span>
                </div>
                <div class="row">
                    <span class="label">Mess Joining Date</span>
                    <span class="value">7 21 23</span>
                </div>
            </div>
        </div>`
);

document.querySelector('.payBill').addEventListener('click', () =>
    document.querySelector('.right').innerHTML =
    `<table class="bill-table">
                <thead>
                    <tr>
                        <th>student ID</th>
                        <th>Name</th>
                        <th>Total Days Attended (This Month)</th>
                        <th>Bill Date</th>
                        <th>Bill Amount (This Month)</th>
                        <th>Amount Paid</th>
                        <th>Total Bill</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>24SS1A0500</td>
                        <td>TestUser 1</td>
                        <td>25</td>
                        <td>21-07-2023</td>
                        <td>Rs. 12342</td>
                        <td>Rs. 10000</td>
                        <td>Rs. 2342</td>
                    </tr>
                </tbody>
            </table>
            <div class="paymentArea roundedgeAll flexColumn flexCenter">
                <h2>Make a Payment</h2>
            <a target="_blank" href="https://onlinesbi.sbi.bank.in/sbicollect/" class="mainbtn payNow">Pay Now</a>
            <h2>Already Paid?</h2>
            <a target="_blank" href = "views/student/paymentReference.html" class="secbtn Submit ">Submit Payment Reference</a>
            </div>
            `
);

document.querySelector('.feedback').addEventListener('click', () =>
    document.querySelector('.right').innerHTML =
    `<div class="feedbackArea roundedgeAll">
                <h2>Feedback</h2>
                <textarea placeholder="Enter your feedback here..."></textarea>
                <button class="mainbtn submitFeedback">Submit</button>
            </div>`
);

document.querySelector('.rules').addEventListener('click', () =>
    document.querySelector('.right').innerHTML =
    `<a class="rulesnreg mainbtn" href="/src/pdf/Untitled document - Google Docs.pdf" target="_blank">Rules and
                Regulations</a>`
);