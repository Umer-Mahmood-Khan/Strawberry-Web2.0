import React, { useState } from 'react';
import searchData from '../data.json'; // Adjust the path according to your setup
import './search.css'; // Importing the CSS file
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Papa from 'papaparse';

const SearchPage = () => {
    const initialFilters = {
        acno: '',
        ACCESSION: '',
        "E Origin Country": '',
        "E Origin Province": '',
        "E SPECIES": '',
        "E GENUS": ''
    };

    const [filters, setFilters] = useState(initialFilters);
    const [searchResults, setSearchResults] = useState([]);
    const [isResultsVisible, setIsResultsVisible] = useState(false);
    const [noResultsMessage, setNoResultsMessage] = useState('');
    const [downloadFormat, setDownloadFormat] = useState('pdf'); // Default to PDF

    const handleSearch = () => {
        const filteredData = searchData.filter(item =>
            Object.keys(filters).every(key =>
                filters[key] ? item[key]?.toLowerCase() === filters[key]?.toLowerCase() : true
            )
        );

        if (filteredData.length === 0) {
            setNoResultsMessage('Requested values don\'t exist. Please try using other filters.');
        } else {
            setNoResultsMessage('');
        }

        setSearchResults(filteredData);
        setIsResultsVisible(true);
    };

    const handleBackToSearch = () => {
        setIsResultsVisible(false);
        setNoResultsMessage('');
        setFilters(initialFilters); // Reset the filters to initial state
    };

    const downloadAsPDF = () => {
        const doc = new jsPDF();
        const tableColumn = Object.keys(initialFilters);
        const tableRows = [];

        searchResults.forEach(item => {
            const rowData = tableColumn.map(key => item[key]);
            tableRows.push(rowData);
        });

        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        doc.text("Search Results", 14, 15);
        doc.save('search_results.pdf');
    };

    const downloadAsCSV = () => {
        const csv = Papa.unparse(searchResults);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'search_results.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownload = () => {
        if (downloadFormat === 'pdf') {
            downloadAsPDF();
        } else {
            downloadAsCSV();
        }
    };

    return (
        <div className="search-page">
            <div className="search-container">
                <div className="search-content">
                    <h1>{isResultsVisible ? 'Search Results' : 'Search Using Filters'}</h1>
                </div>

                {!isResultsVisible ? (
                    <div className="form-container">
                        {Object.keys(initialFilters).map((key) => (
                            <div className="filter-container" key={key}>
                                <label>{key}</label>
                                <input
                                    type="text"
                                    placeholder={`Enter ${key}`}
                                    value={filters[key]}
                                    onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
                                />
                            </div>
                        ))}
                        <button className="search-button" onClick={handleSearch}>Search</button>
                    </div>
                ) : (
                    <div className="results-container">
                        <button className="back-button" onClick={handleBackToSearch}>Back to Search</button>
                        <div style={{ margin: '20px 0' }} /> {/* Adds space after the button */}
                        {noResultsMessage ? (
                            <div className="no-results-container">
                                <p className="no-results-text">{noResultsMessage}</p>
                            </div>
                        ) : (
                            <div className="results-grid">
                                {searchResults.map((item, index) => (
                                    <div key={index} className="result-card">
                                        {Object.keys(item).map((key) => (
                                            <div className="result-item" key={key}>
                                                <strong>{key}:</strong> {item[key]}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                        <div style={{ margin: '30px 0' }} /> {/* More space before radio buttons */}
                        <div className="download-options" style={{ textAlign: 'center' }}>
                            <h3 style={{ fontWeight: 'bold' }}>Select Download Format:</h3>
                            <div>
                                <label style={{ margin: '0 15px', fontWeight: 'bold' }}>
                                    <input
                                        type="radio"
                                        value="pdf"
                                        checked={downloadFormat === 'pdf'}
                                        onChange={(e) => setDownloadFormat(e.target.value)}
                                    />
                                    PDF
                                </label>
                                <label style={{ margin: '0 15px', fontWeight: 'bold' }}>
                                    <input
                                        type="radio"
                                        value="csv"
                                        checked={downloadFormat === 'csv'}
                                        onChange={(e) => setDownloadFormat(e.target.value)}
                                    />
                                    CSV
                                </label>
                            </div>
                        </div>
                        <div style={{ margin: '20px 0' }} /> {/* Adds space before download button */}
                        <button className="search-button" onClick={handleDownload}>Download</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
