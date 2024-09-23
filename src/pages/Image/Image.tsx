export default function Image() {
  return (
    <div className="p-10">
      <h1 className="text-black text-3xl p-6 text-center">Our Gallery</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-2 container mx-auto">
        {/* Main image for larger screens */}
        <div className="md:col-span-3 h-full">
          <img
            src="https://media.istockphoto.com/id/1517473680/photo/paddle-tennis-player-making-an-effort-to-while-hitting-the-ball-during-a-match-on-outdoor.jpg?s=612x612&w=0&k=20&c=XAqco8aQOZziqzo_-icoEFOlSPMCEZJ7JVlWYr7mTmE="
            alt="Main"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Smaller images */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-4 h-full">
          <img
            src="https://media.istockphoto.com/id/1487770785/photo/smiling-senior-woman-and-others-taking-an-exercise-class-at-the-gym.jpg?s=612x612&w=0&k=20&c=vgBSRm_p6LOF04dsljizJJR1gTwrohbAbDGK5i-Q9Fs="
            alt="Right 1"
            className="w-full h-full object-cover"
          />
          <img
            src="https://media.istockphoto.com/id/1485990063/photo/two-senior-friends-hanging-out-together-in-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=N6DwNNxebYo1xHs9dsce0y6eIL18KWwoyohpDO7TfZ8="
            alt="Right 2"
            className="w-full h-full object-cover"
          />
          <img
            src="https://media.istockphoto.com/id/866702538/photo/sprinter-running-on-track.webp?a=1&b=1&s=612x612&w=0&k=20&c=F5ShE2AdsVZPpf0DXYo6si9CcYQufU27ahluq8Ij6J0="
            alt="Right 3"
            className="w-full h-full object-cover"
          />
          <img
            src="https://media.istockphoto.com/id/1070197874/photo/golf-ball-entering-the-hole-after-successful-stroke-close-up-links-golf.webp?a=1&b=1&s=612x612&w=0&k=20&c=VbAf5-sd-Xa5Ae_MewZR2O4v6Vs9jb49YaOjnRlMffk="
            alt="Right 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
