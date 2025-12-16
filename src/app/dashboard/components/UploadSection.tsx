'use client';

import { useState } from 'react';
import FileUploadZone from './FileUploadZone';
import { useUploadFile } from '@/hooks/useUploadFile';
import PinStatusBadge from './PinStatusBadge';
import type { PinStatusResponse } from '@/types/api';

export default function UploadSection() {
  const { upload, uploading, progress, error } = useUploadFile();
  const [uploadResult, setUploadResult] = useState<PinStatusResponse | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileSelect = async (file: File) => {
    try {
      setFileName(file.name);
      setUploadResult(null);

      const result = await upload(file, { name: file.name });

      // Handle single or multiple results (CAR files can return multiple)
      if (Array.isArray(result)) {
        setUploadResult(result[0]);
      } else {
        setUploadResult(result);
      }
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  return (
    <section className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Upload Files</h2>
        <p className="text-slate-400">
          Upload files or CAR archives to IPFS. Files are automatically pinned.
        </p>
      </div>

      <FileUploadZone onFileSelect={handleFileSelect} disabled={uploading} />

      {uploading && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300 text-sm">Uploading {fileName}...</span>
            <span className="text-slate-400 text-sm">{progress}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {error && (
        <div className="mt-6 bg-red-900/20 border border-red-800 rounded-lg p-4">
          <p className="text-red-400 text-sm">{error.message}</p>
        </div>
      )}

      {uploadResult && !uploading && (
        <div className="mt-6 bg-green-900/20 border border-green-700 rounded-lg p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-green-400 font-semibold mb-1">Upload Successful</p>
              <p className="text-slate-300 text-sm">{uploadResult.pin.name || 'Unnamed'}</p>
            </div>
            <PinStatusBadge status={uploadResult.status} size="sm" />
          </div>

          <div className="bg-slate-900 rounded p-3">
            <p className="text-slate-400 text-xs mb-1">CID:</p>
            <code className="text-blue-400 text-sm font-mono break-all">
              {uploadResult.pin.cid}
            </code>
          </div>

          <div className="mt-3 flex gap-2">
            <a
              href={`https://hydrogen.pinion.build/ipfs/${uploadResult.pin.cid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              View on Gateway
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
