import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const softColors = [
    "#BAFFC9", // Light Green
    "#BAE1FF", // Light Blue
    "#D7BAFF", // Soft Lavender
    "#FFABE1", // Pinkish Purple
    "#C2F0FF", // Pale Cyan
    "#FFE4C4", // Blanched Almond
    "#FFDEAD"  // Navajo White
];


const StackedBarChart = () => {
    const [data, setData] = useState([
        {
            category: "Infosys Limited (13 years)", value: 13, subcategories: [
                {
                    "projectName": "EoN Modernization (EonNext)",
                    "description": "Migrated client-server app to a modern web-based system using microservices.",
                    "dates": "Nov 2018 – Feb 2021",
                    "role": "Technical Manager",
                    "duration": 3,
                    "technologies": [".Net", "Oracle DB", "Kafka", "MuleSoft", "Webservices"]
                },
                {
                    "projectName": "Integrated Reservoir Monitoring (iRMS)",
                    "description": "Developed data models and simulated oil reservoirs for Exxon Mobil.",
                    "dates": "Oct 2018 – April 2019",
                    "role": "Technical Manager",
                    "duration": 1,
                    "technologies": ["C# .Net", "WPF", "Python", "HPC"]
                },
                {
                    "projectName": "Web Applications Development (ADM)",
                    "description": "Built and maintained web applications for an energy client’s e-commerce platform.",
                    "dates": "Jun 2015 – Nov 2018",
                    "role": "Technical Lead",
                    "duration": 3,
                    "technologies": ["Java", "JavaScript", "CSS", "Magento"]
                },
                {
                    "projectName": "Well Link Wireline Realtime",
                    "description": "Created a real-time data collection and visualization app for well drilling.",
                    "dates": "Jul 2011 – Feb 2015",
                    "role": "Analyst",
                    "duration": 4,
                    "technologies": ["Python", "Java", "JMS", "WebSphere"]
                }
            ]


        },
        {
            category: "Pegasystems (4 years)", value: 4, subcategories: [{
                "projectName": "Task and Process Mining",
                "description": "Desktop and process data collection analytics & visualizations",
                "dates": "Feb 2021 - Till Date",
                "role": "Engineering Manager",
                "duration": 4,
                "technologies": ["React", "Node", "Big Data tools", "AWS (Hadoop, Spark)"]
            }]
        },
    ]);

    const [details, setDetails] = useState([]); // Stores clicked category details
    const [cat, setCat] = useState(null); // Stores the category name

    useEffect(() => {
        const width = 740;
        const height = 70;
        const padding = 10;

        // Clear previous chart
        d3.select("#stacked-bar").selectAll("*").remove();

        const svg = d3
            .select("#stacked-bar")
            .attr("width", width)
            .attr("height", height)
            .attr("marginTop", "-10px")

        const total = d3.sum(data.map(d => d.value));

        // Create X Scale
        const xScale = d3
            .scaleLinear()
            .domain([0, total])
            .range([padding, width - padding]);

        // Add a group for the stacked bar
        let cumulative = 0;
        svg
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", d => xScale(cumulative += d.value) - xScale(d.value))
            .attr("y", 20)
            .attr("width", d => xScale(d.value))
            .attr("height", 40)
            .attr("fill", (d, i) => softColors[i % softColors.length])
            .on("mouseover", (event, d, i) => {
                d3.select(this).attr("fill", "yellow")
                d3.select(event.target).style("fill", "yellow")
            }).
            on("click", (event, d) => {
                setDetails(d.subcategories); // Update details on click
                setCat(d.category); // Set category name

            }).on("mouseout", (event, d, i) => {
                d3.select(event.target).style("fill", softColors[i % softColors.length])
            }).style("cursor", "pointer");

        cumulative = 0
        // Add category labels
        svg
            .selectAll("text")
            .data(data).enter()
            .append("text").attr("fontSize", 14)
            .attr("fill", "black")
            .attr("x", d => xScale(cumulative += d.value) - (xScale(d.value) - xScale(0)))
            .attr("y", 45)
            .style("pointer-events", "none")
            .style("fontWeight", "bold")
            .text(d => d.category).enter();
    }, [data]);

    return (
        <div>
            <svg id="stacked-bar"></svg>
            {details.length > 0 && (
                <div style={{ marginTop: "-10px" }}>
                    <h3 style={{ marginBottom: "-10px" }}>{cat}</h3>
                    <svg width="800" height={details.length * 100}>
                        {details.map((sub, index) => (
                            <g key={index}>
                                {/* Bar */}
                                <rect
                                    x={650}
                                    y={index * 70 + 45}
                                    width={sub.duration * 20}
                                    height={30}
                                    fill={softColors[index % softColors.length]}
                                />

                                <text
                                    x={80}
                                    y={index * 70 + 55}
                                    fill="black"
                                    fontSize="14"
                                    fontWeight="bold"
                                    width={200}
                                >
                                    {index + 1} - {sub.projectName}
                                </text>
                                <text
                                    x={90}
                                    y={index * 70 + 75}
                                    fill="black"
                                    fontSize="12"
                                >
                                    {sub.description}
                                </text>
                                <text
                                    x={90}
                                    y={index * 70 + 95}
                                    fill="black"
                                    fontSize="12"
                                >
                                    {sub.dates}
                                </text>
                                <text
                                    x={90}
                                    y={index * 70 + 75}
                                    fill="black"
                                    fontSize="12"
                                >
                                    {sub.description}
                                </text>

                                <text
                                    x={660}
                                    y={index * 70 + 65}
                                    fill="black"
                                    fontSize="12"
                                    fontWeight="bold"
                                >
                                    {`${sub.duration} years`}
                                </text>
                            </g>
                        ))}
                    </svg>
                </div>
            )}
        </div>
    );
};

export default StackedBarChart;
