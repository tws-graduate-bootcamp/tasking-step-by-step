# Guide

In this test, we will focus on how to extends tasking diagrams to multiple layers. When you are facing a complicated question, the obvious solution is to divide the complicated question into several easy ones. If the divided sub-questions are still too hard to implement in, say 10 minutes. You can continue dividing them until they turn into obvious questions to you.

The basic steps to draw this kind of tasking diagram is to:

* Draw layer-by-layer. Do not start drawing block in the next layer until all the blocks in the current layer are finished.
* Each block should satisfy all the requirements in the previous practices.

## Practice

In this practice, you will write a function in class `CreditQuerySystem`. The business is as follows:

As a bank manager, I would like to know whether a person's credit situation is good enough. So that I can approve/deny his/her credit application.

**AC1**: I would like to input an ID number of a person. If the ID number is valid and the person is in good credit, then the report should be: `${ID} is in good condition.`.

**AC2**: I would like to input an ID number of a person. If the ID number is not valid. Then the report should be: `${ID} is in bad condition.`.

**AC3**: If the no person can be found with the specified ID, the report should be `The ID '${ID}' does not exist.`

**Tech Requirement**:

* Please draw the task blocking diagram on a paper. You should separate the report formatting process from the querying process.
* Please implement the test first in *credit_query_system_spec.js*, according to your diagram.
* Please implement the function in *creditQuerySystem.js* according to your diagram. The name, inputs and output definition should be exactly the same with your diagram.
