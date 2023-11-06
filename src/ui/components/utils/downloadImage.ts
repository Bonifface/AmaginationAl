import * as FileSaver from 'file-saver';

interface DownloadImageProps {
  _id: string;
  photo: string;
}
export async function downloadImage({ _id, photo }:DownloadImageProps) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
