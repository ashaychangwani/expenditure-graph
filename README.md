# Cash Flow Minimiser

This is a program that allows users to split expenses with friends or colleagues. If a group needs to share the cost of a particular bill, the Cash Flow Minimiser will make sure that each person who paid money, gets reimbursed with the correct amount. This is also done using the minimum number of transactions. 

## How does it work?
Approach to solving this problem:
First, we take in all the transactions and exchanges that have happened among the group of people. We use a function which is used to calculate every individual's net balance. 

Based on their net balances, we can segregate the people into 2 categories - 
<ul>
<li>those under credit </li>
<li>those under debit</li>
</ul>


A person is said to come under <i>credit</i> if his/ her net balance is <i>greater than</i> 0. This means that this person has to get his money back. 
Likewise, a person is said to come under <i>debit</i> if his/ her balance is <i>lesser than</i> 0. This means this person owes money to someone else. 
(If the net balance of an individual is 0, that means that he/ she need not give nor receive any money and they have been <i>settled</i>. 
Such people will no longer be taken into consideration for further transaction settlements). 
