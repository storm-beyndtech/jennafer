"use client";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import bookCover from "../assets/the-philosophy-of-smart-investing.jpg";
import Nav from "../components/Nav";

// Define our book type
type BookData = {
	title: string;
	author: string;
	coverImage: string;
	description: string;
	pages: {
		id: number;
		title: string;
		content: React.ReactNode;
	}[];
};

const bookData: BookData = {
	title: "The Philosophy Of Smart Investing",
	author: "Jennafer Turner",
	coverImage: bookCover.src,
	description:
		"Unlock the secrets of elite investors and discover paradigm-shifting strategies for extraordinary returns in any market condition.",
	pages: [
		{
			id: 1,
			title: "Chapters 1-2",
			content: (
				<div className="space-y-6">
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Chapter 1: Mastering the Wealth Matrix
						</h3>
						<ul className="list-disc pl-6 text-gray-700 space-y-2">
							<li>The Hidden Psychology of Wealth Creators</li>
							<li>Breaking the Chains of Financial Limitation</li>
							<li>Opportunity Recognition Systems</li>
							<li>The Contrarian Advantage</li>
							<li>Wealth Acceleration Principles</li>
							<li>Mental Models of Market Masters</li>
							<li>The Infinite Game Perspective</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Chapter 2: Navigating Tomorrow&apos;s Markets
						</h3>
						<ul className="list-disc pl-6 text-gray-700 space-y-2">
							<li>Emerging Disruption Patterns</li>
							<li>Sector Dominance Cycles</li>
							<li>Invisible Value Extraction Methods</li>
							<li>Capital Preservation During Paradigm Shifts</li>
							<li>Asymmetric Return Opportunities</li>
							<li>Institutional Blind Spots</li>
							<li>Regulatory Arbitrage Strategies</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			id: 2,
			title: "Chapters 3-4",
			content: (
				<div className="space-y-6">
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Chapter 3: The Architecture of Portfolio Excellence
						</h3>
						<ul className="list-disc pl-6 text-gray-700 space-y-2">
							<li>Correlation Decoupling Methods</li>
							<li>Non-Linear Return Frameworks</li>
							<li>Strategic Liquidity Management</li>
							<li>Anti-Fragile Position Construction</li>
							<li>Temporal Diversification Techniques</li>
							<li>Leverage Optimization Systems</li>
							<li>Drawdown Defense Mechanisms</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">Chapter 4: Alternative Asset Mastery</h3>
						<ul className="list-disc pl-6 text-gray-700 space-y-2">
							<li>Private Market Access Strategies</li>
							<li>Real Asset Inflation Hedges</li>
							<li>Intellectual Property Value Capture</li>
							<li>Emerging Digital Asset Ecosystems</li>
							<li>Cash Flow Royalty Structures</li>
							<li>Sovereign Debt Positioning</li>
							<li>Geographic Arbitrage Opportunities</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			id: 3,
			title: "Chapters 5-6",
			content: (
				<div className="space-y-6">
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Chapter 5: Behavioral Edge Development
						</h3>
						<ul className="list-disc pl-6 text-gray-700 space-y-2">
							<li>Cognitive Bias Neutralization</li>
							<li>Emotional Intelligence in Market Cycles</li>
							<li>Decision Making Under Uncertainty</li>
							<li>Counter-Consensus Courage Building</li>
							<li>Information Filtering Frameworks</li>
							<li>Conviction Calibration Methods</li>
							<li>Patience as Competitive Advantage</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Chapter 6: Strategic Market Positioning
						</h3>
						<ul className="list-disc pl-6 text-gray-700 space-y-2">
							<li>Multi-Decade Trend Identification</li>
							<li>Cross-Industry Convergence Points</li>
							<li>Supply Chain Vulnerability Analysis</li>
							<li>Innovation Diffusion Mapping</li>
							<li>Market Structure Evolution Patterns</li>
							<li>Network Effect Amplification</li>
							<li>Pricing Power Protection Strategies</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			id: 4,
			title: "Chapters 7-8",
			content: (
				<div className="space-y-6">
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Chapter 7: Wealth Preservation Mastery
						</h3>
						<ul className="list-disc pl-6 text-gray-700 space-y-2">
							<li>Generational Transfer Engineering</li>
							<li>Tax Efficiency Optimization</li>
							<li>Jurisdictional Diversification</li>
							<li>Strategic Entity Structuring</li>
							<li>Privacy Enhancement Methods</li>
							<li>Succession Planning Frameworks</li>
							<li>Legacy Capital Protection</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							Chapter 8: The Elite Investor&apos;s Toolbox
						</h3>
						<ul className="list-disc pl-6 text-gray-700 space-y-2">
							<li>Proprietary Analysis Frameworks</li>
							<li>Information Asymmetry Creation</li>
							<li>Special Situation Mechanics</li>
							<li>Valuation Anomaly Detection</li>
							<li>Strategic Relationship Cultivation</li>
							<li>Deal Flow Generation Systems</li>
							<li>Due Diligence Enhancement Methods</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			id: 5,
			title: "Epilogue: Beyond Financial Oasis",
			content: (
				<div className="space-y-4 text-gray-700">
					<p>
						The journey you&apos;ve begun by reading these pages is merely the first step toward a
						transformation that extends far beyond numbers in an account. True financial mastery isn&apos;t
						simply about accumulating wealth—it&apos;s about creating a life where money serves your deepest
						aspirations rather than constraining them.
					</p>
					<p>
						The most profound revelation awaiting you is that investing excellence is less about complex
						formulas and more about developing an evolved relationship with opportunity itself. Those who
						achieve extraordinary returns decade after decade possess something more valuable than insider
						information—they cultivate a unique perceptual advantage allowing them to see what others miss.
					</p>
					<p>
						As you implement the frameworks revealed in these chapters, you&apos;ll likely notice changes
						beyond your portfolio. Decision-making in all areas becomes sharper. Time feels more abundant.
						Possibilities previously invisible begin revealing themselves with startling clarity.
					</p>
					<p>
						Remember that the most valuable investment strategies are never found in the mainstream
						conversation. By the time an opportunity becomes obvious to the masses, the extraordinary returns
						have already been captured by those who developed the capacity to see around corners.
					</p>
					<p>
						Your path forward will require courage, patience, and the willingness to stand apart from the
						crowd. But for those who internalize these principles, the rewards extend beyond financial metrics
						to a life of genuine freedom and impact.
					</p>
					<p>
						The question isn&apos;t whether these methods work—history has proven their effectiveness across
						centuries and economic conditions. The only question is whether you&apos;ll be among the few who
						apply them consistently enough to experience their transformative power.
					</p>
				</div>
			),
		},
		{
			id: 6,
			title: "How to Make Great Investments That Pay Off",
			content: (
				<div className="space-y-6">
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">The Perception Arbitrage</h3>
						<div className="space-y-4 text-gray-700">
							<p>
								Where others see chaos, the sophisticated investor perceives patterns. When headlines trigger
								fear, opportunity quietly emerges for those trained to recognize it. This perceptual
								advantage—seeing value where others don&apos;t—creates the most substantial returns in any market.
							</p>
							<p>
								Consider how institutional constraints force even brilliant fund managers to overlook certain
								opportunities. Their mandate requirements, size limitations, and quarterly performance
								pressures create blind spots you can exploit. These inefficiencies persist even in our
								information-saturated age, but only for investors who develop specialized knowledge in
								specific domains.
							</p>
							<p>
								The modern wealth landscape rewards those who cultivate expertise at the intersection of
								multiple disciplines. When you understand both semiconductor manufacturing processes AND
								artificial intelligence deployment challenges, you spot opportunities invisible to specialists
								in either field alone.
							</p>
						</div>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">Strategic Capital Deployment Systems</h3>
						<div className="space-y-4 text-gray-700">
							<p>
								Most investors make decisions reactively, responding to market movements or news. Elite wealth
								creators instead implement systematic capital deployment strategies aligned with macroeconomic
								forces. They recognize how capital flows through markets in predictable, exploitable patterns.
							</p>
							<p>
								Today&apos;s most promising deployment targets exist where traditional industries undergo
								technological transformation. Banking infrastructure, healthcare delivery systems, energy
								distribution networks—all face unprecedented disruption creating asymmetric investment
								opportunities.
							</p>
							<p>
								Those positioned correctly in these transition zones capture returns that seem impossible to
								observers using conventional analysis. Their advantage comes not from privileged information
								but from a deeper understanding of technological adoption curves and regulatory adaptation
								patterns.
							</p>
							<p>
								Traditional valuation metrics often fail to capture the exponential potential in these
								transition zones. The smart investor develops custom evaluation frameworks that incorporate
								network effects, ecosystem positioning, and optionality value—concepts rarely discussed in
								standard investment literature.
							</p>
						</div>
					</div>
				</div>
			),
		},
		{
			id: 7,
			title: "Sovereign Wealth Principles",
			content: (
				<div className="space-y-6">
					<div className="space-y-4 text-gray-700">
						<p>
							For centuries, the world&apos;s wealthiest families and sovereign funds have employed investment
							principles hidden from public view. These aren&apos;t complex formulas but counterintuitive
							approaches to capital preservation and growth across generations.
						</p>
						<p>
							They understand that true financial sovereignty requires positioning assets to benefit
							from—rather than suffer from—inevitable economic cycles and currency fluctuations. This means
							creating portfolios that maintain purchasing power regardless of inflation, deflation, or
							currency devaluation scenarios.
						</p>
						<p>
							The modern application of these principles involves strategic allocation across both traditional
							asset classes and emerging stores of value. It requires understanding the historical patterns of
							wealth transfer during economic regime changes and positioning accordingly.
						</p>
						<p>
							Those who master these principles find themselves untroubled by market volatility that
							devastates unprepared investors. They recognize that the greatest risk isn&apos;t temporary price
							fluctuation but permanent capital impairment—and structure their affairs accordingly.
						</p>
						<div className="mt-12 p-6 bg-amber-50 border-l-4 border-amber-500 text-amber-800 rounded-lg shadow-sm">
							<p className="font-medium text-lg">
								For the full copy or financial consultation,{" "}
								<a href="mailto:jennafer@example.com" className="underline hover:text-amber-600">
									contact Jennafer Turner
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			),
		},
	],
};

export default function BookPage() {
	const [currentPage, setCurrentPage] = useState(0);

	const nextPage = () => {
		if (currentPage < bookData.pages.length - 1) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<>
			<Head>
				<title>
					{bookData.title} by {bookData.author}
				</title>
				<meta name="description" content={bookData.description} />
			</Head>

			<Nav />

			<div className="min-h-screen bg-[#f6f7f2]">
				<div className="max-w-6xl mx-auto px-2 py-8 mt-24">
					<div className="bg-white shadow-2xl rounded-lg overflow-hidden">
						{/* Book Header */}
						<div className="relative h-auto md:h-64 bg-[#363f27] flex flex-col md:flex-row items-center p-6">
							<div className="absolute inset-0 opacity-10 bg-[url('/texture.png')] bg-repeat"></div>
							<div className="relative z-10 flex flex-col md:flex-row items-center w-full gap-6">
								{/* Book cover image */}
								<div className="mr-0 md:mr-8 shadow-lg transform -rotate-3 mb-4 md:mb-0">
									<div className="h-32 md:h-40 w-24 md:w-28 relative">
										<Image
											src={bookCover}
											alt="The Philosophy of Smart Investing - Jennafer Turner"
											fill
											className="object-cover"
										/>
									</div>
								</div>
								<div className="text-white flex-1 text-center md:text-left mb-4 md:mb-0">
									<h1 className="text-2xl md:text-4xl font-bold">{bookData.title}</h1>
									<p className="text-lg md:text-xl opacity-90">by {bookData.author}</p>
									<p className="mt-2 md:mt-4 max-w-lg opacity-80 text-sm md:text-base">
										{bookData.description}
									</p>
								</div>
								<div>
									<button
										className="bg-white text-[#363f27] font-medium hover:bg-blue-50 px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-lg flex items-center text-sm md:text-base"
										onClick={() =>
											window.open("/the-philosophy-of-smart-investing-jennafer-turner.pdf", "_blank")
										}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 md:h-5 md:w-5 mr-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
										Download Demo
									</button>
								</div>
							</div>
						</div>

						{/* Book Content */}
						<div className="p-4 md:p-8 min-h-[400px] md:min-h-[500px]">
							<div className="mb-4 md:mb-6 flex flex-wrap-reverse items-center justify-between">
								<h2 className="text-xl md:text-2xl font-semibold text-gray-800">
									{bookData.pages[currentPage].title}
								</h2>
								<div className="text-xs md:text-sm text-gray-500">
									Page {currentPage + 1} of {bookData.pages.length}
								</div>
							</div>

							<div className="prose max-w-none prose-sm md:prose-base">
								{bookData.pages[currentPage].content}
							</div>
						</div>

						{/* Navigation */}
						<div className="bg-gray-50 px-4 md:px-8 py-3 md:py-4 flex justify-between items-center border-t border-gray-200">
							<button
								onClick={prevPage}
								disabled={currentPage === 0}
								className={`px-2 md:px-4 py-1 md:py-2 rounded text-sm md:text-base ${
									currentPage === 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-800 hover:bg-blue-50"
								}`}
							>
								← Previous
							</button>

							<div className="flex space-x-1 md:space-x-2">
								{bookData.pages.map((_, idx) => (
									<button
										key={idx}
										onClick={() => setCurrentPage(idx)}
										className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
											currentPage === idx ? "bg-blue-600" : "bg-gray-300"
										}`}
										aria-label={`Go to page ${idx + 1}`}
									/>
								))}
							</div>

							<button
								onClick={nextPage}
								disabled={currentPage === bookData.pages.length - 1}
								className={`px-2 md:px-4 py-1 md:py-2 rounded text-sm md:text-base ${
									currentPage === bookData.pages.length - 1
										? "text-gray-400 cursor-not-allowed"
										: "text-blue-800 hover:bg-blue-50"
								}`}
							>
								Next →
							</button>
						</div>
					</div>

					<div className="mt-6 md:mt-8 text-center text-xs md:text-sm text-gray-300">
						© {new Date().getFullYear()} Jennafer Turner. All rights reserved.
					</div>
				</div>
			</div>
		</>
	);
}
