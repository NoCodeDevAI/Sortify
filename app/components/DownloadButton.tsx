'use client';

import { useState } from 'react';

export function DownloadButton() {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'error'>('idle');

  const handleDownload = async () => {
    try {
      setDownloadStatus('downloading');
      const response = await fetch('/downloads/Sortify.exe');
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Sortify.exe';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setDownloadStatus('idle');
    } catch (error) {
      console.error('Download error:', error);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloadStatus === 'downloading'}
      className={`inline-flex items-center px-8 py-3 rounded-lg font-medium transition-colors ${
        downloadStatus === 'downloading'
          ? 'bg-indigo-400 cursor-wait'
          : downloadStatus === 'error'
          ? 'bg-red-600 hover:bg-red-700'
          : 'bg-indigo-600 hover:bg-indigo-700'
      } text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600`}
      aria-label={
        downloadStatus === 'downloading'
          ? 'Downloading...'
          : downloadStatus === 'error'
          ? 'Download failed. Try again'
          : 'Download Sortify for Windows'
      }
    >
      <svg 
        className={`w-5 h-5 mr-2 ${downloadStatus === 'downloading' ? 'animate-spin' : ''}`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        {downloadStatus === 'downloading' ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        ) : downloadStatus === 'error' ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        )}
      </svg>
      {downloadStatus === 'downloading'
        ? 'Downloading...'
        : downloadStatus === 'error'
        ? 'Try Again'
        : 'Download for Windows'}
    </button>
  );
}