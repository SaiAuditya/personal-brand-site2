import React, { useEffect } from "react";
import * as d3 from "d3";
import './tooltip.css'
import Techshowcase from "./techshowcase";

const BarChart = () => {

    const [tech, setTech] = React.useState("")
    const data = [
        { technology: "Javascript", experience: 6 },
        { technology: "SQL", experience: 4 },
        { technology: "React", experience: 5 },
        { technology: "nodejs", experience: 5 },
        { technology: "AWS", experience: 5 },
        { technology: "Java", experience: 5 },
        { technology: "MONGO", experience: 4 },
        { technology: "Postgress", experience: 4 },
        { technology: "Spark", experience: 4 },
        { technology: "ML & AI", experience: 2 },
        { technology: "Python", experience: 2 },
        { technology: "Docker", experience: 2 },
    ];

    useEffect(() => {
        const width = 600;
        const height = 250;
        const padding = 20;

        const svg = d3
            .select("#bar-chart")
            .attr("width", width)
            .attr("height", height);

        // Set the X scale (technologies)
        const xScale = d3.scaleBand()
            .domain(data.map(d => d.technology))
            .range([padding, width - padding])  // Map to width range
            .padding(0.1);  // Add some space between the bars


        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.experience)])
            .range([height - padding, padding]);


        svg
            .selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => xScale(d.technology))
            .attr("y", d => yScale(d.experience))
            .attr("width", xScale.bandwidth())
            .attr("height", d => height - padding - yScale(d.experience))
            .attr("fill", "steelblue")
            .attr("opacity", 0.7).on("mouseover", function (event, d) {

                d3.select(this).transition().duration(200).style("opacity", 1);
                d3.select(this).style("cursor", "pointer")

                d3.select("#tooltip")
                    .style("opacity", 1.2)
                    .html(`
                    <div><strong>${d.technology}</strong></div>
                    <div><strong>Experience:</strong> ${d.experience} years</div>
                  `)
                    .style("left", `${event.pageX + 20}px`)
                    .style("top", `${event.pageY - 40}px`)
            })
            .on("mouseout", function (event, d) {

                d3.select("#tooltip").style("opacity", 0);
                d3.select(this).transition().style("opacity", 0.7)
                const [x, y] = d3.pointer(event, svg.node());

                for (let i = 1; i <= 1; i++) {
                    svg.append("circle")
                        .attr("cx", x)
                        .attr("cy", y + i * 30)
                        .attr("r", 1)
                        .attr("fill", "yellow")
                        .style("opacity", 0.9)
                        .transition()
                        .duration(1000)
                        .ease(d3.easeCubicOut)
                        .attr("r", 30)
                        .style("opacity", 0)
                        .remove();
                }

            }).on("click", function (event, d) {
                d3.selectAll(".bar").attr("fill", "steelblue")
                d3.select(this).transition().attr("fill", "#FFABE1")
                setTech(d.technology)
            })


        svg
            .selectAll(".label")
            .data(data)
            .enter()
            .append("text")
            .attr("class", "label")
            .attr("x", d => xScale(d.technology) + xScale.bandwidth() / 2)
            .attr("y", d => yScale(d.experience) - 5)
            .attr("text-anchor", "middle")
            .attr("fill", "black")
            .text(d => d.experience);


        svg.append("g")
            .attr("transform", `translate(0,${height - padding})`)
            .call(d3.axisBottom(xScale));  // X-axis for technology names

        svg.append("g")
            .attr("transform", `translate(${padding}, 0)`)
            .call(d3.axisLeft(yScale));  // Y-axis for years of experience
    }, []);

    return (
        <div>
            <svg id="bar-chart"></svg>
            <div id="tooltip" className="tooltip"></div>
            <Techshowcase tech={tech}></Techshowcase>
        </div>
    );
};

export default BarChart;
