body {
    font-family: 'Segoe UI', Arial, sans-serif;
    margin: 0;
    background: #eef2f7;
}

/* Header */
header {
    background: linear-gradient(135deg, #2c3e50, #4ca1af);
    color: white;
    padding: 25px 15px;
    text-align: center;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}

header h1 {
    margin: 0;
    letter-spacing: 1px;
}

header p {
    margin-top: 8px;
    font-size: 14px;
    opacity: 0.9;
}

/* Section Tabs */
section {
    background: white;
    color: #2c3e50;
    padding: 15px;
    margin: 15px 10px 0;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
    box-shadow: 0 3px 8px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    border-left: 5px solid #3498db;
}

section:hover {
    transform: translateY(-3px);
    background: #f0f8ff;
}

/* Content Area */
.content {
    display: none;
    background: white;
    margin: 5px 10px 10px;
    padding: 15px;
    border-radius: 8px;
    border-left: 5px solid #3498db;
    box-shadow: 0 3px 8px rgba(0,0,0,0.05);
    animation: fadeIn 0.3s ease-in-out;
}

/* Lists */
ul {
    padding-left: 20px;
}

li {
    margin-bottom: 6px;
}

/* Smooth Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
