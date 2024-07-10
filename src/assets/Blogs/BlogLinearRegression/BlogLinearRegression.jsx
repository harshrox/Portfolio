import React from 'react';
import '../../../App.css';
import BlogHeader from '../BlogHeader'
import ageVsCharge from './ageVsCharge.png';
import costFunction from './costFunction.png';
import partialDerivative from './partialDerivative.png';
import costVsWeight from './costVsWeight.jpg';
import straightLine from './straightLine.png';

function Blog3() {
  
  return (
    
    <>
    
        <BlogHeader title="Gradient Descent Optimization" readTime="10 min read" date="June 10, 2024"/>
        
        <div className="h-auto w-full flex flex-col items-center font-mono">
				<div className='px-5 md:px-10 w-full lg:w-[70%] flex flex-col'>
                    <div className='text-lg md:text-xl'>Before learning about Gradient Descent Optimization, let's first understand Linear Regression and its use.</div>
                    <div className='mt-10 text-xl md:text-3xl text-blue-700'>What is Linear Regression?</div>
                    <div className='mt-2 text-lg md:text-xl'>Linear regression is a statistical method used to model the relationship between input variables (independent 
                                                            variables) and an output variable (dependent variable), under the assumption that this relationship is linear and 
                                                            can be represented by a straight line. The primary goal of linear regression is to determine the linear equation 
                                                            that best fits the observed data, thereby enabling accurate predictions and insights into the relationship between the variables.</div>
                    <div className='mt-10 flex flex-col gap-5 md:gap-0 md:flex-row text-lg md:text-xl'>
                        <div className='md:w-1/2'>
                            Let's consider an example: the graph illustrates the relationship between age and medical charges, indicating the varying expenses 
                                                individuals might incur for medical services based on their age.The primary aim of linear regression is to find the best-fitting line 
                                                among the scattered data points, one that accurately represents the relationship between age and medical charges. By fitting a line to
                                                the data, we can gain valuable insights into how medical expenses change as individuals age, enabling us to make informed decisions and predictions.
                            
                        </div>
                        <div className='md:w-1/2 flex flex-col items-center justify-center'><img src={ageVsCharge} alt="" className='md:h-80'/><p>Fig 1.0</p></div>
                    </div>
                    <div className='mt-5 text-lg md:text-xl'>To achieve this, linear regression leverages mathematical techniques to determine the slope and intercept of the line that minimizes the 
                                                        difference between the observed medical charges and those predicted by the linear equation. One of such mathematical techniques is <span className='text-blue-700'>Gradient Descent Optimization.</span>
                    </div>
                    
                    <div className='mt-10 text-xl md:text-3xl text-blue-700'>What is Gradient Descent Optimization?</div>
                    <div className='mt-2 text-lg md:text-xl'>Gradient descent optimization is a Machine Learning algorithm which works tirelessly to adjust the slope and intercept of the line, 
                                                            iteratively moving them in the direction that minimizes the cost function. This cost function quantifies the difference between observed medical 
                                                            charges and those predicted by the linear equation, with the goal of reducing this difference to its lowest possible value.</div>
                    
                    <div className='mt-10 flex flex-col md:flex-row gap-5 md:gap-0 text-lg md:text-xl'>
                        <div className='md:w-1/2'>Lets talk about the cost function: A <span className='text-blue-700'>cost function</span>, also known as a <span className='text-blue-700'>loss function</span> or <span className='text-blue-700'>Mean Squared Error(MSE)</span>, 
                                                is a mathematical function that measures how "costly" or "bad" a particular prediction of a model is compared to the true values. It quantifies the difference between the 
                                                predicted values and the actual values, providing a measure of how well the model is performing. The goal of training a machine learning model is to minimize this cost function, 
                                                meaning to make its predictions as close to the true values as possible.
                            
                        </div>
                        <div className='md:w-1/2 flex flex-col items-center justify-center'><img src={costFunction} alt="" className='md:h-80'/><p>Fig 1.1</p></div>
                    </div>

                    <div className='mt-10 text-xl md:text-3xl text-blue-700'>How does Gradient Descent Optimization work?</div>
                    <div className='mt-2 text-lg md:text-xl'>As we've come to understand, our main objective is to minimize the cost function to ensure accurate predicted results. Now, 
                                                    let's envision the line that best fits the age versus charges graph, denoted by ŷ<sub>i</sub> = w * x<sub>i</sub> + b, where w represents the weight(slope) and b stands 
                                                    for the bias(intercept). Here, x<sub>i</sub> signifies the input ,specifically, the ages of individuals and ŷ<sub>i</sub> denotes the output(predicted value), namely, the charges incurred 
                                                    for that age. Our ultimate aim is to determine the optimal values of w and b that enable us to predict the output for any random age
                                                    with precision. It is when the Gradient Descent Optimization helps us to find the optimal values of w and b.</div>

                    <div className='mt-2 text-lg md:text-xl'>Now, let's explore how the Mean Squared Error (MSE) depends on the parameters w and b. To do this, we'll substitute the value of ŷ<sub>i</sub> into the MSE formula. This gives us: <span className='md:text-2xl font-bold'>MSE = (1/n) Σ (y<sub>i</sub> - (w * x<sub>i</sub> + b))<sup>2</sup></span></div>
                    <div className='mt-10 flex flex-col md:flex-row gap-5 md:gap-0 text-lg md:text-xl'>
                        <div className='md:w-2/3 flex flex-col'>
                            <div>
                                Next, by taking the partial derivative of the MSE with respect to w and then with respect to b, we obtain: 
                                <p><span className='md:text-2xl font-bold'> d(MSE)/d(w) = -(2/n) Σ x<sub>i</sub>*(y<sub>i</sub> - (w * x<sub>i</sub> + b)) </span></p>
                                and <p><span className='md:text-2xl font-bold'> d(MSE)/d(b) = -(2/n) Σ (y<sub>i</sub> - (w * x<sub>i</sub> + b))</span></p>
                                
                            </div>
                            <div className='mt-10'>
                                From the equation of Mean Squared Error: <p><span className='md:text-2xl font-bold'>MSE = (1/n) Σ (y<sub>i</sub> - (w * x<sub>i</sub> + b))<sup>2</sup></span></p>
                                we can observe that MSE is directly proportional to w<sup>2</sup>. Or we can say, MSE = c * w<sup>2</sup> , where c is some positive constant.
                            </div>
                        </div>
                        <div className='md:w-1/3 flex flex-col items-center justify-center'><img src={partialDerivative} alt="" className='md:h-80 border-2 border-gray-600'/><p>Fig 1.2</p></div>
                    </div>
                    <div className='mt-10 flex flex-col md:flex-row gap-5 md:gap-0  text-lg md:text-xl'>
                        <div className='md:w-2/3 flex flex-col'>
                            <div>
                                So, if we try to plot the graph for MSE or cost versus w, we get something like as shown in the Fig 1.3. The graph of
                                cost versus b will be similar to Fig 1.3.
                            </div>
                            <div className='mt-10'>
                                The key observation from the graph(Fig 1.3) is that at certain value of w, the cost reaches its minimum, and similarly, at certain value of b, the 
                                cost is minimized. Therefore, our objective is to determine these optimal values of w and b where the cost is minimized.
                            </div>
                            <div className='mt-10'>
                                Let's understand how can optimal value of w and b be found.
                            </div>
                        </div>
                        <div className='md:w-1/3 flex flex-col items-center justify-center'><img src={costVsWeight} alt="" className='md:h-80'/><p>Fig 1.3</p></div>
                    </div>

                    <div className='mt-10 text-xl md:text-3xl text-blue-700'>How can the optimal value of w and b be found?</div>
                    <div className='mt-2 text-lg md:text-xl'> This task can be accomplished through two straightforward formulas. They are: <p><span className='md:text-2xl font-bold'>w<sub>new</sub> = w<sub>current</sub> - L * (d(MSE)/d(w))</span></p>
                                                           and <p><span className='md:text-2xl font-bold'>b<sub>new</sub> = b<sub>current</sub> - L * (d(MSE)/d(b))</span></p>
                    </div>
                    <div className='mt-5 text-lg md:text-xl'>
                        We'll initiate this process by selecting arbitrary values for w and b, and then iteratively 
                        update them using these formulas until they converge to the point where the cost is minimized.
                    </div>
                    <div className='mt-5 text-lg md:text-xl'>
                        Let's understand how these formulas work.
                    </div>
                    <div className='mt-5 text-lg md:text-xl'>
                        In the formula <span className='md:text-2xl font-bold'>w<sub>new</sub> = w<sub>current</sub> - L * (d(MSE)/d(w))</span>, w denotes the weight, L denotes the learning rate and d(MSE)/d(w) denotes the partial derivative of MSE with respect to w. 
                        The learning rate determines the step size at which the model parameters are updated during training. It decides how quickly or slowly a model learns from the training data. A higher learning rate
                        means that the model parameters are adjusted more aggressively, potentially leading to faster convergence but also increasing the risk of overshooting the optimal solution or diverging. On the other hand, a lower learning rate leads to slower learning but may result in more stable convergence.
                        <span className='text-blue-700'>Learning rate(L) is a positive constant.</span>
                    </div>
                    <div className='mt-5 text-lg md:text-xl'>
                        One more thing to notice here is that, the partial derivative of cost or MSE with respect to w is same as the slope of cost vs. w graph in Fig 1.3.
                    </div>
                    <div className='mt-5 text-lg md:text-xl'>
                        Now, let's delve into the mechanics of the formula by dissecting Fig 1.3 into two symmetrical halves along the y-axis. Suppose we arbitrarily select a value of w
                        in the first half of Fig 1.3, where the graph's slope is negative. When we substitute this negative slope value (the partial derivative) into the equation, we arrive at a w<sub>new</sub> 
                        value that is greater than the w<sub>current</sub>. Remarkably, the Mean Squared Error (MSE) corresponding to this w<sub>new</sub> would be lesser than that of the w<sub>current</sub> value, as illustrated by Fig 1.3.

                        We proceed iteratively with this process until, hypothetically, we encounter a w<sub>new</sub> in the second half of Fig 1.3, where the graph's slope is positive. In such an instance, upon substituting the 
                        positive slope value (the partial derivative) into the equation, we derive a w<sub>new</sub> value that falls short of the w<sub>current</sub>. Succinctly put, this signifies our continual approach towards converging upon 
                        the minimum w in the graph (Fig 1.3).

                    </div>
                    <div className='mt-5 text-lg md:text-xl'>
                        By similar approach, we arrive at the minimum value of b.
                    </div>
                    <div className='mt-10 text-xl md:text-3xl text-blue-700'>What to do with these minimum values of w and b?</div>
                    <div className='mt-2 flex flex-col md:flex-row gap-5 md:gap-0 text-lg md:text-xl'>
                        <div className='md:w-1/2 flex flex-col'>
                            <div>
                                Having obtained the minimum values of w and b, we straightforwardly substitute them into the linear equation we defined earlier: ŷ<sub>i</sub> = w * x<sub>i</sub> + b. The obtained straight line would look like something as in Fig 1.4.                        
                            </div>
                            <div className='mt-5'>
                                With this, our Machine Learning model is primed and ready. Now, as we continually input x values (representing age), we consistently receive corresponding y values (representing charges) as outputs.
                            </div>
                        </div>
                        <div className='md:w-1/2 flex flex-col items-center justify-center'><img src={straightLine} alt="" className='md:h-80 border-2 border-gray-600'/><p>Fig 1.4</p></div>
                    </div>
                    <div className='mt-10 mb-10 text-xl md:text-2xl text-slate-500'>To gain a deeper understanding of this algorithm through practical implementation using python code, please navigate to the following link: <a href="https://github.com/harshrox/Machine-Learning/blob/main/Linear%20Regression/gradientDescentAlgo.ipynb" target='_blank' className='text-blue-700 underline'>Link to the code</a></div>
                </div>
        </div>
    </>
  );
}

export default Blog3;
