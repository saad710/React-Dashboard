import React from 'react';
import Progress from "../images/icon/progress.png"
import Task from "../images/icon/task.png"
import Tick from "../images/icon/tick.png"
import Chart from "../images/icon/chart.png"
import ProjectRow from './ProjectRow';


const CardBar = () => {
    return (
        <main>
            <section id="dashboard">
				<div class="rows">
					<div class="status-bar">
						<ul>
							<li class="progres">
								<div class="icon">
									<img src={Progress} alt=""/>
								</div>
								<div class="content">
									<div class="numb" data-from="0" data-to="38" data-speed="1000" data-waypoint-active="yes">38</div>
									<div class="text">
										TASK PROGRESS
									</div>
								</div>
							</li>
							<li class="progres">
								<div class="icon">
									<img src={Task} alt=""/>
								</div>
								<div class="content">
									<div class="numb" data-from="0" data-to="59" data-speed="1000" data-waypoint-active="yes">59</div>
									<div class="text">
										TASK RESEARCH
									</div>
								</div>
							</li>
							<li class="progres">
								<div class="icon">
									<img src={Tick} alt=""/>
								</div>
								<div class="content">
									<div class="numb" data-from="0" data-to="87" data-speed="1000" data-waypoint-active="yes">87</div>
									<div class="text">
										TASK COMPLETED
									</div>
								</div>
							</li>
							<li class="progres">
								<div class="icon">
									<img src={Chart} alt=""/>
								</div>
								<div class="content">
									<div class="numb" data-from="0" data-to="43" data-speed="1000" data-waypoint-active="yes">43</div>
									<div class="text">
										ONGOING PROJECT
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
                <ProjectRow/>
                </section>
            
        </main>
    );
};

export default CardBar;