{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', function () \{\
    const flipbook = document.getElementById('flipbook');\
\
    const pdfUrl = '/Users/a1/Desktop/Fall 2023/WOW/love fool.pdf';\
    let currentPage = 1;\
\
    // Load PDF document\
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) \{\
        renderPage(pdf, currentPage);\
    \});\
\
    // Handle arrow key navigation\
    window.addEventListener('keydown', function (event) \{\
        if (event.key === 'ArrowRight' && currentPage < pdf.numPages) \{\
            currentPage++;\
            renderPage(pdf, currentPage);\
        \} else if (event.key === 'ArrowLeft' && currentPage > 1) \{\
            currentPage--;\
            renderPage(pdf, currentPage);\
        \}\
    \});\
\
    // Render a specific page of the PDF\
    function renderPage(pdf, pageNum) \{\
        pdf.getPage(pageNum).then(function(page) \{\
            const scale = 1.5;\
            const viewport = page.getViewport(\{ scale \});\
\
            const pageElement = document.createElement('div');\
            pageElement.classList.add('page');\
            pageElement.style.width = viewport.width + 'px';\
            pageElement.style.height = viewport.height + 'px';\
\
            const canvas = document.createElement('canvas');\
            const context = canvas.getContext('2d');\
            canvas.width = viewport.width;\
            canvas.height = viewport.height;\
            pageElement.appendChild(canvas);\
\
            flipbook.innerHTML = '';\
            flipbook.appendChild(pageElement);\
\
            page.render(\{\
                canvasContext: context,\
                viewport: viewport\
            \});\
        \});\
    \}\
\});\
}