# Guide

In this test, we will focus on how to define input parameters and the output. Generally, there can be multiple input parameters and there will be one return value. To get the desired output, we need to provide enough evidence via input parameters. In other words:

*All the information in the output value must be contained, either directly or indirectly, in the input parameters.*

## Practice

In this practice, you will write a function in class `CreditQuerySystem`. The business is as follows:

As a bank manager, I would like to know whether a person's credit situation is good enough. So that I can approve/deny his/her credit application.

**AC1**: I would like to input an ID number of a person. If the ID number is valid and the person is in good credit, then the person is in good credit condition. Otherwise, he/she is not in a good credit condition.

**Tech Requirement**:

* Please draw the task blocking diagram on a paper. This requirement is simple enough, so one block is enough.
* Please consider how many inputs do you need? Please draw all the inputs and output on the block, as well as the data definition for each input and output.
* Please implement the function in *creditQuerySystem.js* according to your diagram. The name, inputs and output definition should be exactly the same with your diagram.
* Please implement the test in *credit_query_system_spec.js* to verify your function.