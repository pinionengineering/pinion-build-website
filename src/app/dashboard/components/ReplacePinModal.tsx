'use client';

import { useState } from 'react';
import { usePinMutations } from '@/hooks/usePinMutations';
import type { PinStatusResponse } from '@/types/api';

interface ReplacePinModalProps {
  pin: PinStatusResponse;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ReplacePinModal({ pin, onClose, onSuccess }: ReplacePinModalProps) {
  const { replacePin, replacing, error } = usePinMutations();
  const [newCid, setNewCid] = useState('');
  const [newName, setNewName] = useState(pin.pin.name || '');

  const handleReplace = async () => {
    if (!newCid.trim()) return;

    try {
      await replacePin(pin.requestid, {
        cid: newCid.trim(),
        name: newName.trim() || undefined,
      });
      onSuccess();
    } catch (err) {
      // Error handled by hook
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-lg shadow-xl max-w-md w-full border border-slate-700">
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Replace Pin</h3>

          <p className="text-slate-300 mb-4">
            Replace the current pin with a new CID. The old content will be unpinned.
          </p>

          <div className="mb-4">
            <label className="block text-slate-400 text-sm mb-2">Current CID:</label>
            <code className="block bg-slate-900 rounded p-3 text-blue-400 text-sm font-mono break-all">
              {pin.pin.cid}
            </code>
          </div>

          <div className="mb-4">
            <label className="block text-slate-400 text-sm mb-2">
              New CID: <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={newCid}
              onChange={(e) => setNewCid(e.target.value)}
              placeholder="bafy..."
              className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white font-mono placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-400 text-sm mb-2">Name (optional):</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="My file"
              className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-800 rounded p-3 mb-4">
              <p className="text-red-400 text-sm">{error.message}</p>
            </div>
          )}

          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              disabled={replacing}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleReplace}
              disabled={replacing || !newCid.trim()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {replacing ? 'Replacing...' : 'Replace Pin'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
