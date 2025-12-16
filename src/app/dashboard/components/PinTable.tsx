'use client';

import { useState } from 'react';
import PinStatusBadge from './PinStatusBadge';
import DeletePinModal from './DeletePinModal';
import ReplacePinModal from './ReplacePinModal';
import type { PinStatusResponse } from '@/types/api';

interface PinTableProps {
  pins: PinStatusResponse[];
  onRefresh: () => void;
}

export default function PinTable({ pins, onRefresh }: PinTableProps) {
  const [deleteModal, setDeleteModal] = useState<{
    open: boolean;
    pin: PinStatusResponse | null;
  }>({ open: false, pin: null });

  const [replaceModal, setReplaceModal] = useState<{
    open: boolean;
    pin: PinStatusResponse | null;
  }>({ open: false, pin: null });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const truncateCid = (cid: string) => {
    return `${cid.slice(0, 8)}...${cid.slice(-6)}`;
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-slate-400 font-medium text-sm">Name</th>
              <th className="text-left py-3 px-4 text-slate-400 font-medium text-sm">CID</th>
              <th className="text-left py-3 px-4 text-slate-400 font-medium text-sm">Status</th>
              <th className="text-left py-3 px-4 text-slate-400 font-medium text-sm">Created</th>
              <th className="text-right py-3 px-4 text-slate-400 font-medium text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pins.map((pin) => (
              <tr
                key={pin.requestid}
                className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"
              >
                <td className="py-3 px-4">
                  <p className="text-white font-medium">
                    {pin.pin.name || 'Unnamed'}
                  </p>
                </td>
                <td className="py-3 px-4">
                  <code className="text-blue-400 text-sm font-mono">
                    {truncateCid(pin.pin.cid)}
                  </code>
                </td>
                <td className="py-3 px-4">
                  <PinStatusBadge status={pin.status} size="sm" />
                </td>
                <td className="py-3 px-4 text-slate-400 text-sm">
                  {formatDate(pin.created)}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setReplaceModal({ open: true, pin })}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                      title="Replace pin"
                    >
                      Replace
                    </button>
                    <button
                      onClick={() => setDeleteModal({ open: true, pin })}
                      className="text-red-400 hover:text-red-300 text-sm font-medium"
                      title="Delete pin"
                    >
                      Delete
                    </button>
                    <a
                      href={`https://hydrogen.pinion.build/ipfs/${pin.pin.cid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white"
                      title="View on gateway"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {deleteModal.open && deleteModal.pin && (
        <DeletePinModal
          pin={deleteModal.pin}
          onClose={() => setDeleteModal({ open: false, pin: null })}
          onSuccess={() => {
            setDeleteModal({ open: false, pin: null });
            onRefresh();
          }}
        />
      )}

      {replaceModal.open && replaceModal.pin && (
        <ReplacePinModal
          pin={replaceModal.pin}
          onClose={() => setReplaceModal({ open: false, pin: null })}
          onSuccess={() => {
            setReplaceModal({ open: false, pin: null });
            onRefresh();
          }}
        />
      )}
    </>
  );
}
