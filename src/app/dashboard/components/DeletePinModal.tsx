'use client';

import { usePinMutations } from '@/hooks/usePinMutations';
import type { PinStatusResponse } from '@/types/api';

interface DeletePinModalProps {
  pin: PinStatusResponse;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DeletePinModal({ pin, onClose, onSuccess }: DeletePinModalProps) {
  const { deletePin, deleting, error } = usePinMutations();

  const handleDelete = async () => {
    try {
      await deletePin(pin.requestid);
      onSuccess();
    } catch (err) {
      // Error handled by hook
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-lg shadow-xl max-w-md w-full border border-slate-700">
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Delete Pin</h3>

          <p className="text-slate-300 mb-2">
            Are you sure you want to delete this pin?
          </p>

          <div className="bg-slate-900 rounded p-3 mb-4">
            <p className="text-slate-400 text-sm mb-1">Name:</p>
            <p className="text-white font-medium">{pin.pin.name || 'Unnamed'}</p>

            <p className="text-slate-400 text-sm mt-2 mb-1">CID:</p>
            <code className="text-blue-400 text-sm font-mono break-all">
              {pin.pin.cid}
            </code>
          </div>

          <p className="text-red-400 text-sm mb-4">
            This action cannot be undone. The content will be unpinned from the network.
          </p>

          {error && (
            <div className="bg-red-900/20 border border-red-800 rounded p-3 mb-4">
              <p className="text-red-400 text-sm">{error.message}</p>
            </div>
          )}

          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              disabled={deleting}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {deleting ? 'Deleting...' : 'Delete Pin'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
