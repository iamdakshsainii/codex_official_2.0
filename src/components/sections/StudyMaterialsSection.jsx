import React from 'react';
    import RequestNotesSection from './RequestNotesSection';
    import { Link } from 'react-router-dom';

    function StudyMaterialsSection({ className }) {
      const studyMaterials = [
        {
            year: 1,
            semesters: [
              {
                  sem: 1,
                  subjects: [
                    { name: 'Maths I', pdfLink: 'https://drive.google.com/drive/folders/1r7NJeYbb1rcLl4U2ormjC4EArCXHhpMR?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLU6SqdYcYsfINU_Y9CMp1pZ827ZB1U-Xn&si=eu2nbhDJT1UOOowC' },
                    { name: 'Physics', pdfLink: 'https://drive.google.com/file/d/1xoKV4OQ9GTxwtZ_odF_G8mNCSiNSSdTl/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLuAADu3OvBt495Awir13ZNM-gv5IwLGQy&si=gVNEO6RsKd1Rdyi_' },
                    { name: 'Soft Skill', pdfLink: 'https://drive.google.com/drive/folders/1XPcKMrAveyRB3eU7SkyxeZFnE22lawnu?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PL-vEH_IPWrhBantzFj0nsC6el-_PTT0gb&si=cG9_sUU4REr0n_wW' },
                    { name: 'Electronics Engineering', pdfLink: 'https://drive.google.com/drive/folders/16oBr6R-m7sJITzdCvFQnTTVVJb9qfrHR?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLgwJf8NK-2e5G05PTgyTTSVyzTOKRfmTn&si=whSMygL3KEDnKL9A' },
                    { name: 'Mechanics', pdfLink: 'https://drive.google.com/file/d/1qRs8T3rFBa4-LdSkAdbK8pqTCthUir8m/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLDN15nk5uLiAyM7MbRBF1eIFC8y5vMRxI&si=RomUMQCm1wfcvZde' },
                  ],
              },
              {
                  sem: 2,
                  subjects: [
                    { name: 'Chemistry', pdfLink: 'https://drive.google.com/file/d/14eI51zuwmKjbRpXwYkeqNPzbKP1VVlUu/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PL-vEH_IPWrhAmgQHtlNe2b8wnoK3RxKfh&si=Y3DvkM6SpLPr53Pi' },
                    { name: 'Mathematics-II', pdfLink: 'https://drive.google.com/file/d/1q6pfms1gSGFCUq9A7sH0rYj9kmblWrhn/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLKS7ZMKnbPrQukeSraYiel-cNtwscFtlQ&si=pXk_Sh9iD_CAbrXj' },
                    { name: 'Electrical Engineering', pdfLink: '/resources/y1s2/electrical.pdf', youtubePlaylist: 'https://youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&si=pQaQevLA1BbJgbcQ' },
                    { name: 'Environmental Science', pdfLink: 'https://drive.google.com/file/d/1YjVHD2yiHPkr80UjHmNAIsf7FHGWLdJ2/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&si=uU51jzbfxI8bYEvy' },
                    { name: 'Problem Solving', pdfLink: 'https://drive.google.com/file/d/1M-RMaSG2eYM0z4b83i_pIbasQ9yB1JkI/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLmRclvVt5DtksgReOH3s7R1_cb1QA8vrb&si=yhvy5ACdTrQPZQqv' },
                  ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                  sem: 1,
                  subjects: [
                    { name: 'Data Structures and Algorithm', pdfLink: 'https://drive.google.com/file/d/1RU82is6FJfuk-Myd2nOtH2vb2ZWSMvuQ/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT&si=l0ko0o312bvGOM9y' },
                    { name: 'Universal Human Value', pdfLink: 'https://drive.google.com/drive/folders/13ub8CNMzcaPGKbbzqMBNkGAcVCpqnYDB?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLBvTTYUOHEmeYjzc3qrXrX5O6VQhgGEA-&si=F2rFfe92q0jp0goe' },
                    { name: 'COA', pdfLink: 'https://drive.google.com/drive/folders/1ZQck8TwgOkqNYB9Td9_U5YUxUPGP1jfH?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q&si=2W_Ilk0FIdhaZ0pH' },
                    { name: 'Digital Logic', pdfLink: '/resources/y2s1/dl.pdf', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&si=KUhhZJSrcN11gnSX' },
                    { name: 'Maths-III', pdfLink: '/resources/y2s1/ss.pdf', youtubePlaylist: 'https://youtube.com/playlist?list=PLRLB5WCqU54Xh434IarqVO_jpM08445Bh&si=SW91VSiKttwfbCmW' },
                    { name: 'DSTL', pdfLink: 'https://drive.google.com/drive/folders/1HlRsiaGIoUhtPUZI_Wa_VfKU49Fgvagk?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLRLB5WCqU54Xh434IarqVO_jpM08445Bh&si=SW91VSiKttwfbCmW' },
                  ],
              },
              {
                  sem: 2,
                  subjects: [
                    { name: 'Math IV', pdfLink: 'https://drive.google.com/drive/folders/1XPPp1LvhmxE5NXXdsh627sxLa6Op2xcx?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PL92QhapxkNLFbjBos-MlDDORNgIbCCH6V&si=vvicNyqa0esB6uNL' },
                    { name: 'Operating Systems', pdfLink: 'https://drive.google.com/drive/folders/1P2HlX5sF-eu4Y61Ku1X1qb-j_qbU5sDE?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&si=CHsnI1-XkfQMxGEl' },
                    { name: 'Technical Communication', pdfLink: 'https://drive.google.com/drive/folders/1OvAY79p_ZqMeV8injJHWEJyKlKfezZEA?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLaGBxvvw_eMUhn3H7mlBnqCUcd2Vqgq2s&si=AzpxFGZqtgG0jFH9' },
                    { name: 'Theory of Automata', pdfLink: 'https://drive.google.com/drive/folders/13ub8CNMzcaPGKbbzqMBNkGAcVCpqnYDB?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&si=8nyqVsl6T0gjHSq9' },
                    { name: 'OOPS JAVA', pdfLink: 'https://drive.google.com/drive/folders/1vBDus9C3EL-mJq0ghW3bN1HqYRsLhvNw?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&si=ebgeHbspVjckvL_F' },
                    { name: 'Python', pdfLink: 'https://drive.google.com/drive/folders/1o7j3MNntiUprXN5huXF1GOAobhmWCNVD?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLRLB5WCqU54Xh434IarqVO_jpM08445Bh&si=SW91VSiKttwfbCmW' },
                  ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                sem: 1,
                subjects: [
                  { name: 'Web Technology', pdfLink: 'https://drive.google.com/drive/folders/120yVpZQrT27bT8ZCaEy5dR8oEGUtpEyg?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PL49mRA0Y_C8u2dOqXa-f9KSoSx9XICZ1E&si=JlThNLtspAboLAsM' },
                  { name: 'Design and Analysis of Algorithm', pdfLink: 'https://drive.google.com/drive/folders/1RMGGSR2SE3Vw6qnYrhpeVOlHvkA2SEiC', youtubePlaylist: 'https://youtube.com/playlist?list=PL1QH9gyQXfgs7foRxIbIH8wmJyDh5QzAm&si=K1JlmLB13AClKX7x' },
                  { name: 'Object Oriented System Design with C++', pdfLink: 'https://drive.google.com/drive/folders/18ANiupEbP3_EIUkbqnbtT1meo3r2zFXs?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHUUi6ZlansKbDw_cXut0El&si=7FFnRtunwpjBwk0j' },
                  { name: 'Big Data', pdfLink: 'https://drive.google.com/drive/folders/18ANiupEbP3_EIUkbqnbtT1meo3r2zFXs?usp=sharing', youtubePlaylist: 'https://youtu.be/q3Z3Qa1UNBA?si=FJiNGD5cv2FtJSDd' },
                  { name: 'Database Management System', pdfLink: 'https://drive.google.com/drive/folders/1wpdNzcOiqmmGdh7mPf_u2wtz9lOX8gQt?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=-f1XIF_WS_jOwZcF' },
                ],
              },
              {
                  sem: 2,
                  subjects: [
                    { name: 'Machine Learning', pdfLink: 'https://drive.google.com/drive/folders/1qq3W-pNLSQuNtaeJESmABVbQuwhTqh7N?usp=drive_link', youtubePlaylist: 'https://youtu.be/2oGsCHlfBUg?si=nwtJQuOVifTwuV5E' },
                    { name: 'Cloud Computing', pdfLink: 'https://drive.google.com/file/d/1wyA1u-OKTLa9vkbGO733HfDrxoqvGlBk/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4&si=1lvcF7DHTYZuBECz' },
                    { name: 'Compiler Design', pdfLink: 'https://drive.google.com/drive/folders/1YZ72XtP0HD2QEA6YPnFx9ntqayoD4VzH?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PL1QH9gyQXfguPNDTsnG90W2kBDQpYLDQr&si=ETOj6QjEFoAHGnPr' },
                    { name: 'Computer Networks', pdfLink: 'https://drive.google.com/drive/folders/1Gnuvbc1KzYbgxf4HxdESNVljiyyzyY8C?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&si=ouQxyMmSRFWupXls' },
                    { name: 'Data Compression', pdfLink: 'https://drive.google.com/drive/folders/1TbYPiq8xCF9NAh-0xTZknD9wNAtlrREb?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PLh11ucJN276JEKspf_OmmCL-JGOh6sT3-&si=kUY2Bt7vhhmneHeF' },
                    { name: 'Software Engineering', pdfLink: 'https://drive.google.com/drive/folders/1G2zDN9yBkj0F9IQRrczMqacDVJFNKe7V?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PLmXKhU9FNesTrw7n8ouPsSLEcduRlENHr&si=efbJRNfqam1pc3Vn' },
                  ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                sem: 1,
                subjects: [
                  { name: 'Advanced Algorithms', pdfLink: '/resources/y4s1/aa.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  { name: 'Big Data', pdfLink: '/resources/y4s1/bd.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  { name: 'DevOps', pdfLink: '/resources/y4s1/devops.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  { name: 'Blockchain', pdfLink: '/resources/y4s1/blockchain.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  { name: 'Artificial Intelligence', pdfLink: '/resources/y4s1/ai.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                ],
              },
              {
                sem: 2,
                subjects: [
                  { name: 'Blockchain', pdfLink: '/resources/y4s2/blockchain.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  { name: 'IoT', pdfLink: '/resources/y4s2/iot.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  { name: 'Cybersecurity', pdfLink: '/resources/y4s2/cybersecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  { name: 'Cloud Security', pdfLink: '/resources/y4s2/cloudsecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  { name: 'Network Security', pdfLink: '/resources/y4s2/networksecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                ],
              },
            ],
          },
        ];

      return (
        <section id="study-materials" className={`container mx-auto px-4 mb-12 ${className} transition-opacity duration-500`}>
          <h2 className="text-3xl font-bold text-center mb-6">Study Materials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {studyMaterials.map((yearData) => (
              <div key={yearData.year} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-center p-4 border-b border-blue-500/20">Year {yearData.year}</h3>
                <div className="p-4 space-y-4">
                  {yearData.semesters.map((semester) => (
                    <div key={semester.sem} className="bg-gray-700/50 backdrop-blur-sm rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                      <h4 className="text-xl font-semibold p-2 text-center border-b border-blue-500/10">Semester {semester.sem}</h4>
                      <div className="text-center p-2">
                        <button
                          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                          View Subjects
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Want to explore handwritten notes?{' '}
              <Link
                to="/tutorials/handwritten-notes"
                className="text-blue-500 hover:underline"
              >
                Explore More Notes
              </Link>
            </p>
          </div>
          <RequestNotesSection />
        </section>
      );
    }

    export default StudyMaterialsSection;
