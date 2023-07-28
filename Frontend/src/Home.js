import React, { useState } from 'react';
import Footer from './Footer';
import { BiSolidRightArrowAlt } from 'react-icons/bi';
import './Home.css';
import './Navbar.css';
import logoo from '../src/images/logoo.mp4'
import table from '..//src/images/table.png'
import Navbar from './Navbar';
import head from '..//src/images/head.jpg'
import { useSelector } from 'react-redux';



export default function Home() {
  const [imageNum, setImageNum] = useState(1);

  const { user } = useSelector((state) => state.master);


  return (
    <div>

      <Navbar />
      <div className="sliderss">
        {<h2>Welcome Back !<span><h2>{user}</h2></span></h2>}
        <video className='videoTag' autoPlay loop muted>
          <source src={logoo} height={100} width={400} type='video/mp4' />
        </video>

      </div>

      <div className='sub_head'>
        <br /><br /><br />
        <h2>  How to Calculate Income Tax on Salary with example</h2>
        <br /><p>By many, income tax is looked at as a necessary evil. With ever-changing tax laws and several jargons – tax exemption, tax rebate, tax deduction, tax saving, etc –<br /> to decipher, most of the time we do not even realize what portion of our income is being taxed, and how we can save some money.</p>
        <br />
        <img src={head} alt="adsf" />
        <br /><br />
        <h4>How to Calculate Income Tax on Salary? </h4>
        <p>Generally, tax is calculated by multiplying the applicable tax rate with the taxable income. Though it seems simple, it consists of several steps, including <br />calculating gross salary, calculating deductions and exemptions, calculating tax payable, deducting tax already paid.</p>
        <br />
        <pre style={{ color: "green", fontSize: "20px" }}>To make it simple, here are the 5 steps that you can use to calculate income tax on salary: </pre>

        <p style={{ color: "darkblue", fontSize: "20px" }}>Step 1: Calculate your gross income</p>

        <p>First, write down the annual gross salary you get. This will include all the components of your salary, including House Rent Allowance (HRA), <br />Leave Travel Allowance (LTA), and special allowances, like food coupons and mobile reimbursements.<br /><br />For HRA, remember you can claim HRA only if you live in a rented house and can submit valid rent receipts as proof. You can easily fill out and <br />download the rent receipt from the ET Money website and submit it after affixing the revenue stamp and getting it signed by your landlord or landlady to<br /> claim the HRA benefit. If you have your own accommodation or live with your parents, then HRA is fully taxable.</p><br />

        <p style={{ color: "darkblue", fontSize: "20px" }}>Step 2 – Arrive at your net taxable income by removing deductions</p>

        <p>Tax deductions allow you to reduce your taxable income further by investing, saving, or spending on certain items.

          First is the Standard Deduction <br />of Rs 50,000 (mentioned in the previous section), which can be availed by all, without making investments or expenditures on any defined products.

          Next,<br /> deduct investment and expenses eligible under Section 80.</p><br />
        <p style={{ color: "darkblue", fontSize: "20px" }}>Step 3: Arriving at your net taxable income</p>
        <p>By subtracting all the eligible deductions from the gross taxable income, you will arrive at your total income on which you need to pay tax basis your tax slab.</p>
        <br />
        <img src={table} alt="" style={{ width: "1000px" }} /><br />
        <br /><p>This slab rate is different for senior citizens. For those who are over 60 years old with up to Rs 3 lakh net income, the tax rate is nil. And for very senior citizens, <br />who are over 80 years old, up to Rs 5 lakh net income, the tax rate is nil. Basically, the applicable tax rates depend on your age and net income.</p><br />
        <p style={{ color: "darkblue", fontSize: "20px" }}>STEP 4 – Calculate Your Taxes</p>
        <br />
        <p>
          Now, one pays tax on his/her net taxable income.
          <ul>
            <br />
            <BiSolidRightArrowAlt />For the first Rs. 2.5 lakh of your taxable income you pay zero tax<br />
            <BiSolidRightArrowAlt />For the next Rs. 2.5 lakhs you pay 5% i.e. Rs 12,500<br />
            <BiSolidRightArrowAlt />For the next 5 lakhs you pay 20% i.e. Rs 1,00,000<br />
            <BiSolidRightArrowAlt />For your taxable income part which exceeds Rs. 10 lakhs you pay 30% on the entire amount
          </ul>
        </p>
        <p style={{ color: "darkblue", fontSize: "20px" }}>Step 5: Consolidate your net tax</p>
        <p><b>Rebate under Sec 87A:</b> Tax rebate is a form of tax incentive provided by the government to individuals earning an income below a specified limit. <br />In case your total taxable income after deductions doesn’t exceed Rs 5 lakh, you can claim rebate under Sec 87A of Rs 12,500.<br /><br />Now if your taxable incomeis more than Rs 5 lakh, you can add the health and education cess of 4 percent to your tax amount to see the final amount you will pay.<br /><br />For people in the very high-income bracket, i.e. between Rs 50 lakh and Rs 1 crore, they need to pay a surcharge of 10 percent. And,<br /> for income between Rs 1 and Rs 2 crore, surcharge is 20 percent.</p>


        <p style={{ color: "darkblue", fontSize: "20px" }}>Step 6: Calculate Tax </p>
        <p>As you can see tax deductions can help you save a lot of tax. And there are some great avenues that can help you not only achieve this but also help reduce stress around finances.</p><br />

        <pre>So go ahead and click the <a href='/calci' style={{ color: " rgb(17, 214, 248)" }}><b>CALCULATE TAX</b></a> app and get a personalised tax saving plan. </pre>


      </div>



      <Footer />
    </div>

  )
}


