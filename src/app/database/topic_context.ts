export type ContextKey = 'Electric & Magnetic Fields' | 'Gravitational Fields' | 'Laws of Motion' | 'other' | 'Proteins' | 'Stem Cells' | 'Inheritance';
export type SecContextKey = 'other' | 'Inheritance';

export const CONTEXTS: Record<ContextKey, string> = {
  'other': '',

  'Electric & Magnetic Fields': `
#### Electric & Magnetic Fields

**3.1 Electric Fields in a Conductor**

*   **Ideal Conductor:**
    *   Forms an equipotential volume: The electric potential is the same at all points within and on the surface of an ideal conductor in electrostatic equilibrium.
    *   Electric field within is zero: Any excess charge resides on the surface. If there were a field inside, charges would move to cancel it.
*   **Charge Accumulation:** Electric charge accumulates on the surfaces of a conductor.
*   **Electric Field at Surface:** The electric field at the surface of a conductor is always normal (perpendicular) to the surface. If it had a tangential component, charges would move along the surface, violating electrostatic equilibrium.

**3.2 Gauss's Law for Electric and Magnetic Fields**

*   **Gauss's Law for Electric Fields:** The total electric flux through any closed surface (Gaussian surface) is proportional to the total electric charge enclosed within that surface.
    *   $$\Phi_E = \oint \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{enclosed}}{\epsilon_0}$$
    *   **Application:** Solving problems involving symmetric charge distributions (e.g., spheres, cylinders, infinite planes) by relating electric flux to enclosed charge.
        *   **Example (Electric Field of a Point Charge):** For a spherical Gaussian surface of radius $$r$$ enclosing a point charge $$Q$$ at its center:
            $$\oint E dA = E \oint dA = E(4\pi r^2)$$
            $$E(4\pi r^2) = \frac{Q}{\epsilon_0} \implies E = \frac{Q}{4\pi\epsilon_0 r^2}$$
*   **Gauss's Law for Magnetic Fields:** The total magnetic flux through any closed surface is always zero.
    *   $$\Phi_B = \oint \mathbf{B} \cdot d\mathbf{A} = 0$$
    *   **Implication:** This law suggests the non-existence of magnetic monopoles. Magnetic field lines always form closed loops, meaning they have no beginning or end.

**3.3 Ampere's Law for Magnetic Fields**

*   **Ampere's Law:** The line integral of the magnetic field around any closed loop (Amperian loop) is proportional to the total electric current enclosed by that loop.
    *   $$\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{enclosed}$$
    *   Where $$\mu_0$$ is the permeability of free space ($4\pi \times 10^{-7} \text{ H m}^{-1}$).
    *   **Application:** Solving problems involving symmetric current configurations (e.g., long straight wires, solenoids, toroids) to find the magnetic field.
        *   **Example (Magnetic Field of a Long Straight Wire):** For a circular Amperian loop of radius $$r$$ around a long straight current-carrying wire:
            $$\oint B dl = B \oint dl = B(2\pi r)$$
            $$B(2\pi r) = \mu_0 I \implies B = \frac{\mu_0 I}{2\pi r}$$

**3.4 Electric and Magnetic Dipoles**

*   **Electric Dipole:** Consists of two equal and opposite charges ($+q$$ and $$-q$$) separated by a small distance $$d$$.
    *   **Electric Dipole Moment ($p$ or $$\mathbf{p}$$):** A vector quantity defined as the product of the charge magnitude and the separation distance, pointing from the negative to the positive charge.
        *   $$p = qd$$
        *   Units: C m.
    *   **Torque on an Electric Dipole in an External Electric Field ($\mathbf{E}$):**
        *   $$\tau = pE\sin\theta$$ or $$\mathbf{\tau} = \mathbf{p} \times \mathbf{E}$$
        *   Where $$\theta$$ is the angle between $$\mathbf{p}$$ and $$\mathbf{E}$$. The torque tends to align the dipole with the field.
    *   **Potential Energy of an Electric Dipole in an External Electric Field:**
        *   $$U = -pE\cos\theta$$ or $$U = -\mathbf{p} \cdot \mathbf{E}$$
        *   Minimum energy when aligned with the field ($$\theta=0$$), maximum energy when anti-aligned ($$\theta=180^\circ$$).
*   **Magnetic Dipole:** A current loop or a permanent magnet has a magnetic dipole moment.
    *   **Magnetic Dipole Moment ($\mu$ or $$\mathbf{m}$$):** For a current loop, it is the product of the current and the area of the loop.
        *   $$\mu = IA$$
        *   Units: A m$$^2$$.
    *   **Torque on a Magnetic Dipole in an External Magnetic Field ($\mathbf{B}$):**
        *   $$\tau = \mu B\sin\theta$$ or $$\mathbf{\tau} = \mathbf{\mu} \times \mathbf{B}$$
        *   Where $$\theta$$ is the angle between $$\mathbf{\mu}$$ and $$\mathbf{B}$$.
    *   **Potential Energy of a Magnetic Dipole in an External Magnetic Field:**
        *   $$U = -\mu B\cos\theta$$ or $$U = -\mathbf{\mu} \cdot \mathbf{B}$$
*   **Analogy and Monopoles:** Electric and magnetic dipoles behave analogously in external fields. However, magnetic monopoles (isolated north or south poles) have not been observed, which is consistent with Gauss's law for magnetism.
`,

  'Gravitational Fields': `
#### 8. Gravitational Fields

**8.1 Newton's Law of Gravitation**

*   **Statement:** Every particle in the Universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.
    *   $$F = \frac{GM_1M_2}{r^2}$$
    *   Where $$G$$ is the universal gravitational constant ($$6.67 \times 10^{-11} \text{ N m}^2 \text{ kg}^{-2}$$), $$M_1$$ and $$M_2$$ are the masses, and $$r$$ is the distance between their centers.

**8.2 Gravitational Field Strength**

*   **Definition:** Gravitational field strength ($g$) at a point is the gravitational force per unit mass exerted on a small test mass placed at that point.
    *   $$g = \frac{F}{m}$$
*   **For a Point Mass:**
    *   $$g = \frac{GM}{r^2}$$
    *   Where $$M$$ is the mass creating the field and $$r$$ is the distance from its center.
*   **Near Earth's Surface:** Gravitational field strength is approximately constant and equal to the acceleration of free fall ($$g \approx 9.81 \text{ N kg}^{-1}$$ or $$9.81 \text{ m s}^{-2}$$).

**8.3 Gravitational Potential and Energy**

*   **Gravitational Potential ($\phi$):** The work done per unit mass by an external force in bringing a small test mass from infinity to that point in a gravitational field. It is a scalar quantity.
    *   $$\phi = -\frac{GM}{r}$$
    *   The negative sign indicates that gravity is an attractive force, and potential energy decreases as masses get closer. Potential is defined as zero at infinity.
    *   Units: J kg$$^{-1}$$.
*   **Gravitational Potential Energy ($E_p$):** The energy of a system of two point masses due to their gravitational attraction.
    *   $$E_p = m\phi = -\frac{GMm}{r}$$
*   **Relationship between Field Strength and Potential:** Gravitational field strength is equal to the negative potential gradient.
    *   $$g = -\frac{d\phi}{dr}$$
    *   This means the field points in the direction of decreasing potential.

**8.4 Escape Velocity and Circular Orbits**

*   **Escape Velocity ($v_{esc}$):** The minimum speed an object needs to escape the gravitational pull of a massive body and move infinitely far away, without further propulsion.
    *   Consider energy conservation: Initial KE + Initial GPE = Final KE + Final GPE.
    *   To escape, final KE = 0 and final GPE = 0 (at infinity).
    *   $$\frac{1}{2}mv_{esc}^2 + \left(-\frac{GMm}{R}\right) = 0 + 0$$
    *   $$\frac{1}{2}mv_{esc}^2 = \frac{GMm}{R}$$
    *   $$v_{esc} = \sqrt{\frac{2GM}{R}}$$
    *   Where $$M$$ is the mass of the planet and $$R$$ is the radius from its center.
*   **Circular Orbits in Inverse Square Law Fields:** For a satellite in a circular orbit around a planet, the gravitational force provides the centripetal force.
    *   $$\frac{GMm}{r^2} = \frac{mv^2}{r}$$
    *   $$v = \sqrt{\frac{GM}{r}}$$ (orbital speed)
    *   $$T = \frac{2\pi r}{v} = 2\pi r \sqrt{\frac{r}{GM}}$$ (orbital period)
    *   $$T^2 = \left(\frac{4\pi^2}{GM}\right)r^3$$ (Kepler's Third Law)
*   **Geostationary Orbit:** A circular orbit directly above the Earth's equator that has a period equal to the Earth's rotational period (24 hours). A satellite in this orbit appears stationary from the ground.
    *   Requires a specific orbital radius. Using Kepler's Third Law with $$T = 24 \text{ hours}$$ and Earth's mass $$M_E$$:
        $$r^3 = \frac{GMT^2}{4\pi^2}$$
        $$r = \sqrt[3]{\frac{(6.67 \times 10^{-11})(5.97 \times 10^{24})(24 \times 3600)^2}{4\pi^2}} \approx 4.22 \times 10^7 \text{ m}$$ (from Earth's center)
    *   Applications: Communications, weather monitoring.  
`,

  'Laws of Motion': `
**3.4 Laws of Motion**

*   **Newton's First Law (Law of Inertia):** A body at rest will stay at rest, and a body in motion will continue to move at constant velocity, unless acted upon by a resultant external force.
*   **Newton's Second Law:** The rate of change of momentum of a body is directly proportional to the resultant force acting on the body and is in the same direction as the resultant force.
    *   $$\mathbf{F}_{net} = \frac{d\mathbf{p}}{dt}$$
    *   For a body of constant mass: $$\mathbf{F}_{net} = m\mathbf{a}$$
    *   **Example:** A 2 kg object experiences a net force of $$10 \text{ N}$$. What is its acceleration?
        $$a = F/m = 10 \text{ N} / 2 \text{ kg} = 5 \text{ m/s}^2$$
*   **Newton's Third Law:** When one body exerts a force on a second body, the second body simultaneously exerts a force equal in magnitude and opposite in direction on the first body. These forces act on *different* bodies.
    *   Example: A book on a table. The book exerts a downward force (weight) on the table, and the table exerts an upward normal force on the book.

`,

  'Proteins': `
#### C. Proteins

**Protein Structure:**
Proteins are complex macromolecules with diverse roles, and their function is intricately linked to their specific three-dimensional structure.

*   **Primary Structure:** The unique linear sequence of amino acids in a polypeptide chain. This sequence is determined by the genetic code.
*   **Secondary Structure:** Localized, repetitive folding patterns of the polypeptide chain, primarily stabilized by hydrogen bonds between the backbone atoms (not R-groups).
    *   **Alpha (α)-helix:** A coiled structure resembling a spring, formed by hydrogen bonds between every fourth amino acid.
    *   **Beta (β)-pleated sheet:** A folded, accordion-like structure formed by hydrogen bonds between parallel or anti-parallel segments of the polypeptide chain.
*   **Tertiary Structure:** The overall three-dimensional shape of a single polypeptide chain, resulting from interactions between the R-groups of amino acids. These interactions include:
    *   **Hydrogen bonds:** Between polar R-groups.
    *   **Ionic bonds:** Between oppositely charged R-groups (acidic and basic).
    *   **Disulfide bonds:** Strong covalent bonds formed between the sulfhydryl groups of two cysteine residues ($$-S-S-$$).
    *   **Hydrophobic interactions:** Nonpolar R-groups tend to cluster in the interior of the protein, away from water, driven by the hydrophobic effect.
    *   **Van der Waals interactions:** Weak, transient attractions between adjacent nonpolar R-groups.
*   **Quaternary Structure:** The overall three-dimensional structure formed by the association of two or more polypeptide subunits (each with its own tertiary structure) into a functional protein complex. (e.g., hemoglobin).

**Effects of Temperature and pH on Protein Structure:**
*   **Temperature:**
    *   **Increase:** Increased kinetic energy of atoms, causing vibrations that disrupt the weak bonds (hydrogen, ionic, hydrophobic interactions) maintaining secondary, tertiary, and quaternary structures.
    *   **Denaturation:** Beyond an optimal temperature, the protein loses its specific 3D shape, leading to loss of function. This is often irreversible.
    *   **Decrease:** Reduced kinetic energy, leading to decreased enzyme activity but usually no permanent denaturation.
*   **pH:**
    *   **Deviation from optimum pH:** Changes in pH alter the charges of acidic and basic R-groups (due to protonation or deprotonation).
    *   **Disruption of ionic and hydrogen bonds:** This disrupts the specific interactions holding the tertiary and quaternary structures, leading to denaturation and loss of function.

**Molecular Structure and Function of Specific Proteins (H2/H3):**

*   **Haemoglobin (Globular; Transport):**
    *   **Structure:** A globular protein with quaternary structure, composed of four polypeptide subunits (two α-chains and two β-chains). Each subunit contains a heme group with an iron atom that binds oxygen.
    *   **Function:** Transports oxygen from the lungs to the tissues and carbon dioxide from the tissues to the lungs. Its globular shape allows it to be soluble in blood plasma. The cooperative binding of oxygen to its four subunits enhances its efficiency as an oxygen carrier.
*   **Collagen (Fibrous; Structural):**
    *   **Structure:** A fibrous protein with a triple helix (quaternary-like structure, but often described as a superhelix formed from three α-chains). Each α-chain is a helix, and three such helices wound around each other. High proportion of glycine, proline, and hydroxyproline.
    *   **Function:** Provides tensile strength and structural support to connective tissues (skin, bones, tendons, cartilage). Its long, rigid, insoluble triple helical structure allows it to form strong fibers.

**Enzyme Mode of Action:**
Enzymes are biological catalysts, typically proteins, that speed up biochemical reactions without being consumed.

*   **Active Site:** A specific region on the enzyme, usually a cleft or pocket, that binds to the substrate(s). Its shape and chemical properties are complementary to the substrate.
*   **Enzyme-Substrate Complex:** The temporary complex formed when the substrate binds to the active site of the enzyme.
*   **Lowering Activation Energy:** Enzymes lower the activation energy of a reaction by:
    *   Orienting substrates correctly.
    *   Straining substrate bonds.
    *   Providing a favorable microenvironment.
    *   Covalently bonding to the substrate (temporarily).
*   **Enzyme Specificity:** Each enzyme typically catalyzes only one or a very small number of reactions due to the precise complementary fit between the active site and the substrate.
*   **Hypotheses:**
    *   **Lock-and-Key Hypothesis:** Proposed by Emil Fischer, suggests that the active site has a rigid shape perfectly complementary to the substrate, like a key fitting into a lock.
    *   **Induced-Fit Hypothesis:** Proposed by Daniel Koshland, suggests that the active site is flexible and undergoes a slight conformational change upon substrate binding, optimizing the fit and enhancing catalysis. This is the more widely accepted model.

**Factors Affecting Enzyme-Catalysed Reactions:**

*   **Temperature:**
    *   **Increase:** Initially increases reaction rate as kinetic energy of enzyme and substrate molecules increases, leading to more frequent collisions.
    *   **Optimum temperature:** The temperature at which the enzyme exhibits maximum activity.
    *   **Denaturation:** Above the optimum, the enzyme's 3D structure (active site shape) is irreversibly altered, leading to a rapid decrease in activity.
*   **pH:**
    *   **Optimum pH:** The pH at which the enzyme exhibits maximum activity.
    *   **Deviation from optimum:** Changes in pH alter the ionization state of amino acid R-groups in the active site, disrupting ionic and hydrogen bonds, leading to changes in active site shape and denaturation.
*   **Enzyme Concentration:**
    *   **Increase:** With a saturating amount of substrate, increasing enzyme concentration directly increases the reaction rate, as more active sites are available to bind to substrates.
    *   **Relationship:** Rate is directly proportional to enzyme concentration.
*   **Substrate Concentration:**
    *   **Increase (low concentration):** Increases reaction rate as more substrate molecules are available to bind to active sites.
    *   **Saturation:** At high substrate concentrations, all active sites become saturated with substrate, and the reaction rate reaches a maximum ($$V_{max}$$). Further increases in substrate concentration will not increase the rate.

**Competitive and Non-competitive Inhibitors (H2/H3):**

*   **Competitive Inhibitor:**
    *   **Structure:** Molecule similar in shape to the substrate, allowing it to bind reversibly to the enzyme's active site.
    *   **Binding Site:** Active site.
    *   **Effect on Rate:** Reduces the rate of reaction by competing with the substrate for active site binding. Can be overcome by increasing substrate concentration. Does not change $$V_{max}$$, but increases $$K_m$$.
*   **Non-competitive Inhibitor:**
    *   **Structure:** Molecule that binds to an allosteric site (a site other than the active site) on the enzyme.
    *   **Binding Site:** Allosteric site.
    *   **Effect on Rate:** Causes a conformational change in the enzyme, altering the active site and reducing its catalytic efficiency. Cannot be overcome by increasing substrate concentration. Decreases $$V_{max}$$, but does not change $$K_m$$.
    *   **Allosteric Inhibitors:** A type of non-competitive inhibitor that binds to an allosteric site, often involved in feedback regulation, to switch enzyme activity on or off.

`,
  
  'Stem Cells': `
#### D. Stem Cells

**Unique Features of Stem Cells:**
Stem cells are undifferentiated cells with the remarkable ability to divide and differentiate into various specialized cell types.

*   **Totipotency (e.g., Zygotic Stem Cells):**
    *   **Explanation:** The ability of a single cell to differentiate into all cell types, including embryonic and extraembryonic tissues (like the placenta).
    *   **Example:** A zygote (fertilized egg) and the first few cells after cleavage are totipotent, capable of forming an entire organism.
*   **Pluripotency (e.g., Embryonic Stem Cells):**
    *   **Explanation:** The ability of a single cell to differentiate into all cell types that make up the organism, but not extraembryonic tissues.
    *   **Example:** Cells from the inner cell mass of a blastocyst are pluripotent.
*   **Multipotency (e.g., Blood Stem Cells, Lymphoid and Myeloid Stem Cells - H2/H3):**
    *   **Explanation:** The ability of a single cell to differentiate into a limited number of specialized cell types within a particular lineage or tissue.
    *   **Example:** Hematopoietic stem cells (blood stem cells) in bone marrow can differentiate into all types of blood cells (red blood cells, white blood cells, platelets).
        *   **Lymphoid stem cells:** Give rise to lymphocytes (T cells, B cells, NK cells).
        *   **Myeloid stem cells:** Give rise to other blood cells like erythrocytes, granulocytes, monocytes, and megakaryocytes.

**Normal Functions of Stem Cells in a Living Organism:**

*   **Growth and Development:** Embryonic stem cells (pluripotent) are crucial for the development of an entire organism from a single-cell zygote, undergoing extensive division and differentiation to form all tissues and organs.
*   **Tissue Repair and Regeneration:** Adult stem cells (multipotent) are responsible for replacing damaged or dead cells throughout an organism's life, maintaining tissue homeostasis.
    *   **Example:** Blood stem cells continuously replenish various blood cell types, which have short lifespans. Skin stem cells replace epidermal cells that are shed.
*   **Homeostasis:** Stem cells ensure the continuous self-renewal of tissues with high turnover rates, such as the skin, gut lining, and blood.
`,
'Inheritance': `
## Tertiary Level: Biology Notes

### Core Idea 1: The Cell and Biomolecules of Life

This core idea delves into the fundamental unit of life – the cell – and the essential biomolecules that orchestrate its functions. It explores the diversity of cells, their internal structures, the chemical basis of life, and the mechanisms by which cells maintain their internal environment.

#### A. Organelles and Cellular Structures

**Cell Theory:**
The cell theory is a foundational concept in biology, stating three key principles:
1.  **Cells are the smallest unit of life:** All living organisms are composed of one or more cells, and the cell is the most basic structural and functional unit of life.
2.  **All cells come from pre-existing cells:** Cells arise from the division of other cells, not through spontaneous generation.
3.  **Living organisms are composed of cells:** This unifies all living things under a common organizational principle.

**Eukaryotic Cells (Plant and Animal):**
Eukaryotic cells are characterized by the presence of a membrane-bound nucleus and other membrane-bound organelles.

*   **Cytoplasm (Cytosol):** The jelly-like substance that fills the cell and surrounds the organelles. It is the site of many metabolic reactions.
*   **Cellulose Cell Wall (Plants only):** A rigid outer layer composed primarily of cellulose, providing structural support and protection to plant cells.
*   **Rough Endoplasmic Reticulum (RER):** A network of interconnected membranes studded with ribosomes. Its function is protein synthesis (for secretion or insertion into membranes) and modification (e.g., glycosylation).
*   **Smooth Endoplasmic Reticulum (SER):** A network of interconnected membranes lacking ribosomes. Involved in lipid synthesis, detoxification of drugs and poisons, and storage of calcium ions.
*   **Golgi Body (Apparatus/Complex):** Consists of flattened membranous sacs (cisternae). Modifies, sorts, and packages proteins and lipids synthesized in the ER for secretion or delivery to other organelles.
*   **Mitochondria:** Often called the "powerhouses" of the cell. They are the sites of aerobic respiration, producing ATP. They have a double membrane, with the inner membrane folded into cristae.
*   **Ribosomes:** Small complexes of ribosomal RNA (rRNA) and protein. Sites of protein synthesis (translation). Found free in the cytoplasm or bound to the RER.
*   **Lysosomes (Animal cells only):** Membranous sacs containing hydrolytic enzymes. Involved in intracellular digestion of macromolecules, old organelles, and foreign particles.
*   **Chloroplasts (Plant cells and algae only):** Sites of photosynthesis. They contain chlorophyll and have a double membrane, with internal stacks of thylakoids called grana.
*   **Cell Surface Membrane (Plasma Membrane):** A selectively permeable barrier that encloses the cytoplasm, regulating the passage of substances into and out of the cell. Composed of a phospholipid bilayer with embedded proteins (fluid mosaic model).
*   **Nuclear Envelope:** A double membrane enclosing the nucleus, perforated by nuclear pores that regulate transport between the nucleus and cytoplasm.
*   **Centrioles (Animal cells only):** Cylindrical structures involved in cell division, forming the spindle fibers. Part of the centrosome.
*   **Nucleus:** Contains most of the cell's genetic material (DNA) organized into chromosomes. Controls cell growth and reproduction.
*   **Nucleolus:** A dense region within the nucleus involved in the synthesis of ribosomal RNA (rRNA) and the assembly of ribosomes.

**Prokaryotic Cells (e.g., Bacteria):**
Prokaryotic cells are typically small and unicellular, lacking membrane-bound organelles.
*   **Structure:**
    *   **Small and unicellular:** Generally much smaller than eukaryotic cells ($$0.1 - 5 \text{ µm}$$).
    *   **Peptidoglycan cell wall:** Provides structural support and protection, preventing osmotic lysis.
    *   **Circular DNA:** Genetic material is typically a single, circular chromosome located in the nucleoid region, not enclosed by a membrane. Plasmids (smaller circular DNA molecules) may also be present.
    *   **70S ribosomes:** Sites of protein synthesis, smaller than eukaryotic 80S ribosomes.
    *   **Lack of membrane-bound organelles:** No nucleus, ER, Golgi, mitochondria, or chloroplasts.

**Viruses (H2/H3):**
Viruses are non-cellular infectious agents that challenge the traditional cell theory and the concept of "living organisms."

*   **Structural Components:**
    *   **Genetic material:** Can be DNA or RNA, single-stranded or double-stranded, linear or circular.
    *   **Capsid:** A protein coat that encloses the genetic material.
    *   **Envelope (optional):** A lipid bilayer derived from the host cell membrane, surrounding the capsid in some viruses (e.g., influenza, HIV). Enveloped viruses use spike proteins on their surface to attach to host cells.
    *   **Bacteriophages:** Viruses that infect bacteria, typically having a complex structure with a head (containing genetic material), a tail, and tail fibers for attachment.
*   **Challenges to Cell Theory:**
    *   **Acellularity:** Viruses are not composed of cells; they lack cytoplasm, organelles, and a cell membrane.
    *   **Obligate intracellular parasites:** They cannot carry out metabolic processes or reproduce independently. They must infect a host cell and hijack its machinery to replicate.
    *   **Lack of independent metabolism:** They do not grow or develop in the same way as cellular organisms.
*   **Concepts of "Living":** Viruses blur the line between living and non-living. They possess genetic material, can evolve, and reproduce (within a host), but lack key characteristics of cellular life.

**Cell Differentiation (H3):**
*   **Need for differentiation in multicellular organisms:**
    *   **Specialization:** Different cell types (e.g., muscle cells, nerve cells, epithelial cells) develop specific structures and functions, allowing for the division of labor within the organism.
    *   **Efficiency:** Specialized cells can perform their tasks more efficiently than a single generalist cell.
    *   **Complexity:** Differentiation allows for the formation of tissues, organs, and organ systems, leading to complex multicellular organisms with advanced capabilities.
    *   **Homeostasis:** Specialized cells contribute to maintaining a stable internal environment necessary for the survival of the organism.
*   **Mature cells returning to a stem cell state (H3):**
    *   **Somatic Cell Nuclear Transfer (SCNT) / Cloning (e.g., Dolly the sheep):** Involves transferring the nucleus of a somatic cell into an enucleated egg cell, which can then develop into an embryo and potentially a new organism. This showed that the genetic information in a differentiated cell remains totipotent.
    *   **Induced Pluripotent Stem Cells (iPSCs) (e.g., Shinya Yamanaka):** Yamanaka's work demonstrated that mature somatic cells can be reprogrammed into pluripotent stem cells by introducing a few specific "reprogramming" genes (transcription factors). This challenged the idea of irreversible specialization, showing that cell fate is plastic.
    *   **Plant Tissue Culture (e.g., John Gurdon's early work on amphibians and plant totipotency):** Plant cells are often totipotent, meaning a single plant cell can dedifferentiate and regenerate an entire plant under appropriate conditions. This highlights the inherent plasticity of plant cells. These endeavors demonstrate that cell differentiation is not always irreversible and that mature cells retain the genetic potential to return to a less differentiated state.

#### B. Biomolecules of Life and Cellular Transport

**Monomers and Polymers:**
Living organisms are primarily composed of four major classes of biomolecules: carbohydrates, lipids, proteins, and nucleic acids. These are often polymers built from smaller monomer subunits.

*   **Carbohydrates:**
    *   **Monomers:** Monosaccharides, such as α-glucose and β-glucose.
        *   **α-glucose:** Hydroxyl group on carbon 1 is below the ring. Forms starch and glycogen.
        *   **β-glucose:** Hydroxyl group on carbon 1 is above the ring. Forms cellulose.
    *   **Bonds:** **Glycosidic bonds** formed between monosaccharides via condensation reactions.
*   **Lipids:**
    *   **Monomers:** **Glycerol** (a three-carbon alcohol) and **fatty acids** (long hydrocarbon chains with a carboxyl group).
    *   **Bonds:** **Ester bonds** formed between glycerol and fatty acids via condensation reactions.
*   **Proteins:**
    *   **Monomers:** **Amino acids** (contain an amino group, a carboxyl group, a hydrogen atom, and a variable R-group, all attached to a central alpha carbon).
    *   **Bonds:** **Peptide bonds** formed between amino acids via condensation reactions.

**Structures and Properties of Biomolecules:**

*   **Starch (Carbohydrate):**
    *   **Structure:** Polysaccharide composed of α-glucose monomers. Exists as two main forms:
        *   **Amylose:** Unbranched helical chain, held by α-1,4 glycosidic bonds.
        *   **Amylopectin:** Branched chain, with α-1,4 and α-1,6 glycosidic bonds.
    *   **Properties:** Compact, insoluble in water (due to hydrogen bonds forming within the molecule, reducing free hydroxyl groups to interact with water), large molecule.
    *   **Role:** Primary energy storage in plants. The helical structure of amylose and branching of amylopectin allow for compact storage and rapid hydrolysis to release glucose.
*   **Cellulose (Carbohydrate):**
    *   **Structure:** Polysaccharide composed of β-glucose monomers. Forms long, unbranched chains linked by β-1,4 glycosidic bonds. Adjacent chains are held together by hydrogen bonds, forming microfibrils.
    *   **Properties:** High tensile strength, insoluble, rigid.
    *   **Role:** Major structural component of plant cell walls, providing rigidity and support. The extensive hydrogen bonding makes it very strong and resistant to enzymatic breakdown (except by cellulase).
*   **Glycogen (Carbohydrate, H2/H3):**
    *   **Structure:** Highly branched polysaccharide of α-glucose monomers, similar to amylopectin but more extensively branched.
    *   **Properties:** Compact, rapidly mobilized.
    *   **Role:** Primary energy storage in animals (liver and muscle cells). High branching allows for quick release of glucose when energy is needed.
*   **Triglyceride (Lipid):**
    *   **Structure:** Composed of one glycerol molecule esterified to three fatty acid molecules. Can be saturated (no C=C double bonds in fatty acids) or unsaturated (one or more C=C double bonds).
    *   **Properties:** Hydrophobic, insoluble in water, high energy density, less dense than water.
    *   **Role:** Long-term energy storage, insulation, protection of organs.
*   **Phospholipid (Lipid):**
    *   **Structure:** Composed of one glycerol molecule, two fatty acid chains, and a phosphate group (often with a small polar molecule attached). Has a hydrophilic head (phosphate group) and two hydrophobic tails (fatty acids).
    *   **Properties:** Amphipathic (both hydrophilic and hydrophobic).
    *   **Role:** Primary component of cell membranes, forming the phospholipid bilayer, which is essential for regulating transport.

**Fluid Mosaic Model of Cell Membranes:**
*   **Explanation:** The cell membrane is a dynamic structure where proteins are embedded in or span a fluid phospholipid bilayer.
*   **Constituent Biomolecules and their Roles:**
    *   **Phospholipids:** Form the basic bilayer structure. Their amphipathic nature causes them to spontaneously arrange into a bilayer in aqueous environments, with hydrophobic tails facing inward and hydrophilic heads facing outward. This forms a barrier to polar molecules.
    *   **Proteins:**
        *   **Integral proteins:** Span the entire membrane (transmembrane) or are embedded within it. Functions include transport (channels, carriers), enzymatic activity, signal transduction, cell-cell recognition, intercellular joining, and attachment to the cytoskeleton and extracellular matrix.
        *   **Peripheral proteins:** Loosely bound to the surface of the membrane or to integral proteins. Involved in cell signaling and enzymatic activities.
    *   **Glycolipids:** Carbohydrates covalently bonded to lipids. Involved in cell-cell recognition, cell adhesion, and as receptors.
    *   **Glycoproteins:** Carbohydrates covalently bonded to proteins. Play roles in cell-cell recognition, cell adhesion, and as receptors.
    *   **Cholesterol (Animal cells only):** A steroid lipid embedded within the phospholipid bilayer.
        *   **Role:** At warm temperatures, it restrains phospholipid movement, reducing fluidity. At cool temperatures, it prevents tight packing of phospholipids, maintaining fluidity. It thus acts as a "fluidity buffer".

**Functions of Membranes:**
*   **Cell surface membranes:**
    *   **Selective permeability:** Regulates the passage of substances.
    *   **Cell-cell recognition:** Glycoproteins and glycolipids act as markers.
    *   **Cell signaling:** Receptors bind to ligands, initiating responses.
    *   **Adhesion:** Involved in cell junctions.
*   **Membranes within the cell (organelles):**
    *   **Compartmentalization:** Divide the cell into functional compartments, allowing different metabolic processes to occur simultaneously without interference.
    *   **Surface for reactions:** Provide surfaces for enzyme attachment and metabolic pathways.
    *   **Transport:** Regulate the movement of substances between compartments.

**Movement of Substances Across Membranes:**
*   **Simple Diffusion:**
    *   **Explanation:** Passive movement of small, nonpolar molecules (e.g., O2, CO2) directly across the lipid bilayer from a region of higher concentration to lower concentration. No energy or protein carriers required.
    *   **Why:** Driven by the concentration gradient to achieve equilibrium.
*   **Osmosis:**
    *   **Explanation:** Passive movement of water molecules across a selectively permeable membrane from a region of higher water potential (lower solute concentration) to a region of lower water potential (higher solute concentration). No energy or protein carriers required (though aquaporins facilitate it).
    *   **Why:** To equalize water potential across the membrane.
*   **Facilitated Diffusion:**
    *   **Explanation:** Passive movement of polar molecules or ions (e.g., glucose, amino acids, ions) across the membrane with the help of specific transport proteins (channel proteins or carrier proteins). Movement is down the concentration gradient. No energy required.
    *   **Why:** The lipid bilayer is impermeable to these substances; transport proteins provide a pathway.
*   **Active Transport:**
    *   **Explanation:** Movement of substances across the membrane against their concentration gradient, from a region of lower concentration to higher concentration. Requires energy (ATP) and specific carrier proteins (pumps).
    *   **Why:** To maintain specific intracellular concentrations of ions or molecules, often far from equilibrium (e.g., sodium-potassium pump).
*   **Endocytosis:**
    *   **Explanation:** Process by which cells take in macromolecules or larger particles by forming vesicles from the cell surface membrane. Includes phagocytosis (cellular eating), pinocytosis (cellular drinking), and receptor-mediated endocytosis (specific uptake). Requires energy.
    *   **Why:** To ingest nutrients, pathogens, or regulate receptor levels.
*   **Exocytosis:**
    *   **Explanation:** Process by which cells release macromolecules or waste products by fusing vesicles with the cell surface membrane, expelling their contents outside the cell. Requires energy.
    *   **Why:** To secrete hormones, enzymes, neurotransmitters, or remove waste.

#### C. Proteins

**Protein Structure:**
Proteins are complex macromolecules with diverse roles, and their function is intricately linked to their specific three-dimensional structure.

*   **Primary Structure:** The unique linear sequence of amino acids in a polypeptide chain. This sequence is determined by the genetic code.
*   **Secondary Structure:** Localized, repetitive folding patterns of the polypeptide chain, primarily stabilized by hydrogen bonds between the backbone atoms (not R-groups).
    *   **Alpha (α)-helix:** A coiled structure resembling a spring, formed by hydrogen bonds between every fourth amino acid.
    *   **Beta (β)-pleated sheet:** A folded, accordion-like structure formed by hydrogen bonds between parallel or anti-parallel segments of the polypeptide chain.
*   **Tertiary Structure:** The overall three-dimensional shape of a single polypeptide chain, resulting from interactions between the R-groups of amino acids. These interactions include:
    *   **Hydrogen bonds:** Between polar R-groups.
    *   **Ionic bonds:** Between oppositely charged R-groups (acidic and basic).
    *   **Disulfide bonds:** Strong covalent bonds formed between the sulfhydryl groups of two cysteine residues ($$-S-S-$$).
    *   **Hydrophobic interactions:** Nonpolar R-groups tend to cluster in the interior of the protein, away from water, driven by the hydrophobic effect.
    *   **Van der Waals interactions:** Weak, transient attractions between adjacent nonpolar R-groups.
*   **Quaternary Structure:** The overall three-dimensional structure formed by the association of two or more polypeptide subunits (each with its own tertiary structure) into a functional protein complex. (e.g., hemoglobin).

**Effects of Temperature and pH on Protein Structure:**
*   **Temperature:**
    *   **Increase:** Increased kinetic energy of atoms, causing vibrations that disrupt the weak bonds (hydrogen, ionic, hydrophobic interactions) maintaining secondary, tertiary, and quaternary structures.
    *   **Denaturation:** Beyond an optimal temperature, the protein loses its specific 3D shape, leading to loss of function. This is often irreversible.
    *   **Decrease:** Reduced kinetic energy, leading to decreased enzyme activity but usually no permanent denaturation.
*   **pH:**
    *   **Deviation from optimum pH:** Changes in pH alter the charges of acidic and basic R-groups (due to protonation or deprotonation).
    *   **Disruption of ionic and hydrogen bonds:** This disrupts the specific interactions holding the tertiary and quaternary structures, leading to denaturation and loss of function.

**Molecular Structure and Function of Specific Proteins (H2/H3):**

*   **Haemoglobin (Globular; Transport):**
    *   **Structure:** A globular protein with quaternary structure, composed of four polypeptide subunits (two α-chains and two β-chains). Each subunit contains a heme group with an iron atom that binds oxygen.
    *   **Function:** Transports oxygen from the lungs to the tissues and carbon dioxide from the tissues to the lungs. Its globular shape allows it to be soluble in blood plasma. The cooperative binding of oxygen to its four subunits enhances its efficiency as an oxygen carrier.
*   **Collagen (Fibrous; Structural):**
    *   **Structure:** A fibrous protein with a triple helix (quaternary-like structure, but often described as a superhelix formed from three α-chains). Each α-chain is a helix, and three such helices wound around each other. High proportion of glycine, proline, and hydroxyproline.
    *   **Function:** Provides tensile strength and structural support to connective tissues (skin, bones, tendons, cartilage). Its long, rigid, insoluble triple helical structure allows it to form strong fibers.

**Enzyme Mode of Action:**
Enzymes are biological catalysts, typically proteins, that speed up biochemical reactions without being consumed.

*   **Active Site:** A specific region on the enzyme, usually a cleft or pocket, that binds to the substrate(s). Its shape and chemical properties are complementary to the substrate.
*   **Enzyme-Substrate Complex:** The temporary complex formed when the substrate binds to the active site of the enzyme.
*   **Lowering Activation Energy:** Enzymes lower the activation energy of a reaction by:
    *   Orienting substrates correctly.
    *   Straining substrate bonds.
    *   Providing a favorable microenvironment.
    *   Covalently bonding to the substrate (temporarily).
*   **Enzyme Specificity:** Each enzyme typically catalyzes only one or a very small number of reactions due to the precise complementary fit between the active site and the substrate.
*   **Hypotheses:**
    *   **Lock-and-Key Hypothesis:** Proposed by Emil Fischer, suggests that the active site has a rigid shape perfectly complementary to the substrate, like a key fitting into a lock.
    *   **Induced-Fit Hypothesis:** Proposed by Daniel Koshland, suggests that the active site is flexible and undergoes a slight conformational change upon substrate binding, optimizing the fit and enhancing catalysis. This is the more widely accepted model.

**Factors Affecting Enzyme-Catalysed Reactions:**

*   **Temperature:**
    *   **Increase:** Initially increases reaction rate as kinetic energy of enzyme and substrate molecules increases, leading to more frequent collisions.
    *   **Optimum temperature:** The temperature at which the enzyme exhibits maximum activity.
    *   **Denaturation:** Above the optimum, the enzyme's 3D structure (active site shape) is irreversibly altered, leading to a rapid decrease in activity.
*   **pH:**
    *   **Optimum pH:** The pH at which the enzyme exhibits maximum activity.
    *   **Deviation from optimum:** Changes in pH alter the ionization state of amino acid R-groups in the active site, disrupting ionic and hydrogen bonds, leading to changes in active site shape and denaturation.
*   **Enzyme Concentration:**
    *   **Increase:** With a saturating amount of substrate, increasing enzyme concentration directly increases the reaction rate, as more active sites are available to bind to substrates.
    *   **Relationship:** Rate is directly proportional to enzyme concentration.
*   **Substrate Concentration:**
    *   **Increase (low concentration):** Increases reaction rate as more substrate molecules are available to bind to active sites.
    *   **Saturation:** At high substrate concentrations, all active sites become saturated with substrate, and the reaction rate reaches a maximum ($$V_{max}$$). Further increases in substrate concentration will not increase the rate.

**Competitive and Non-competitive Inhibitors (H2/H3):**

*   **Competitive Inhibitor:**
    *   **Structure:** Molecule similar in shape to the substrate, allowing it to bind reversibly to the enzyme's active site.
    *   **Binding Site:** Active site.
    *   **Effect on Rate:** Reduces the rate of reaction by competing with the substrate for active site binding. Can be overcome by increasing substrate concentration. Does not change $$V_{max}$$, but increases $$K_m$$.
*   **Non-competitive Inhibitor:**
    *   **Structure:** Molecule that binds to an allosteric site (a site other than the active site) on the enzyme.
    *   **Binding Site:** Allosteric site.
    *   **Effect on Rate:** Causes a conformational change in the enzyme, altering the active site and reducing its catalytic efficiency. Cannot be overcome by increasing substrate concentration. Decreases $$V_{max}$$, but does not change $$K_m$$.
    *   **Allosteric Inhibitors:** A type of non-competitive inhibitor that binds to an allosteric site, often involved in feedback regulation, to switch enzyme activity on or off.

#### D. Stem Cells

**Unique Features of Stem Cells:**
Stem cells are undifferentiated cells with the remarkable ability to divide and differentiate into various specialized cell types.

*   **Totipotency (e.g., Zygotic Stem Cells):**
    *   **Explanation:** The ability of a single cell to differentiate into all cell types, including embryonic and extraembryonic tissues (like the placenta).
    *   **Example:** A zygote (fertilized egg) and the first few cells after cleavage are totipotent, capable of forming an entire organism.
*   **Pluripotency (e.g., Embryonic Stem Cells):**
    *   **Explanation:** The ability of a single cell to differentiate into all cell types that make up the organism, but not extraembryonic tissues.
    *   **Example:** Cells from the inner cell mass of a blastocyst are pluripotent.
*   **Multipotency (e.g., Blood Stem Cells, Lymphoid and Myeloid Stem Cells - H2/H3):**
    *   **Explanation:** The ability of a single cell to differentiate into a limited number of specialized cell types within a particular lineage or tissue.
    *   **Example:** Hematopoietic stem cells (blood stem cells) in bone marrow can differentiate into all types of blood cells (red blood cells, white blood cells, platelets).
        *   **Lymphoid stem cells:** Give rise to lymphocytes (T cells, B cells, NK cells).
        *   **Myeloid stem cells:** Give rise to other blood cells like erythrocytes, granulocytes, monocytes, and megakaryocytes.

**Normal Functions of Stem Cells in a Living Organism:**

*   **Growth and Development:** Embryonic stem cells (pluripotent) are crucial for the development of an entire organism from a single-cell zygote, undergoing extensive division and differentiation to form all tissues and organs.
*   **Tissue Repair and Regeneration:** Adult stem cells (multipotent) are responsible for replacing damaged or dead cells throughout an organism's life, maintaining tissue homeostasis.
    *   **Example:** Blood stem cells continuously replenish various blood cell types, which have short lifespans. Skin stem cells replace epidermal cells that are shed.
*   **Homeostasis:** Stem cells ensure the continuous self-renewal of tissues with high turnover rates, such as the skin, gut lining, and blood.

### Core Idea 2: Genetics and Inheritance

This core idea explores the molecular basis of heredity, how genetic information is stored, expressed, and passed down through generations, and the mechanisms that generate variation in populations.

#### A. The Structure of Nucleic Acids and Gene Expression

**Structure and Roles of DNA and RNA:**
Nucleic acids (DNA and RNA) are polymers of nucleotides, responsible for carrying genetic information.

*   **DNA (Deoxyribonucleic Acid):**
    *   **Structure:** Double helix, composed of two polynucleotide strands coiled around each other. Each nucleotide consists of a deoxyribose sugar, a phosphate group, and one of four nitrogenous bases (Adenine (A), Guanine (G), Cytosine (C), Thymine (T)).
    *   **Bases:** A pairs with T (2 hydrogen bonds), G pairs with C (3 hydrogen bonds). This **complementary base pairing** ensures genetic stability.
    *   **Backbone:** Sugar-phosphate backbone provides structural integrity.
    *   **Roles:**
        *   **Storage of genetic information:** Carries the blueprint for all cellular proteins and functions.
        *   **Heredity:** Passed from parent to offspring, ensuring continuity of life.
        *   **Directs RNA synthesis:** Serves as a template for transcription.
*   **RNA (Ribonucleic Acid):**
    *   **Structure:** Single-stranded polynucleotide (usually, though can form complex 3D structures). Each nucleotide consists of a ribose sugar, a phosphate group, and one of four nitrogenous bases (Adenine (A), Guanine (G), Cytosine (C), Uracil (U)). Uracil replaces Thymine.
    *   **Roles:**
        *   **mRNA (messenger RNA):** Carries genetic information from DNA in the nucleus to ribosomes in the cytoplasm, serving as a template for protein synthesis.
        *   **tRNA (transfer RNA):** Carries specific amino acids to the ribosome during translation, matching them to codons on mRNA.
        *   **rRNA (ribosomal RNA):** A structural and catalytic component of ribosomes, essential for protein synthesis.

**DNA Replication:**
The process by which DNA is duplicated, ensuring that each daughter cell receives an identical copy of the genetic material. It is **semi-conservative**, meaning each new DNA molecule consists of one original strand and one newly synthesized strand.

*   **Process:**
    1.  **Unwinding:** DNA helicase unwinds the double helix, separating the two parent strands.
    2.  **Primer synthesis:** Primase synthesizes short RNA primers on both strands.
    3.  **Elongation:** DNA polymerase adds complementary deoxyribonucleotides to the 3' end of the primer, using the parent strands as templates.
        *   **Leading strand:** Synthesized continuously in the 5' to 3' direction.
        *   **Lagging strand:** Synthesized discontinuously in short fragments (Okazaki fragments) in the 5' to 3' direction, which are later joined.
    4.  **Ligation:** DNA ligase joins the Okazaki fragments and other gaps.
    5.  **Proofreading:** DNA polymerase proofreads the new strands, correcting errors.
*   **End Replication Problem (H2/H3):**
    *   **Explanation:** Due to the lagging strand synthesis mechanism, DNA polymerase cannot fully replicate the very ends (telomeres) of linear eukaryotic chromosomes. After each round of replication, the new lagging strand is slightly shorter than the template strand.
    *   **Consequence:** Progressive shortening of telomeres with each cell division.
    *   **Solution (in some cells):** Telomerase, an enzyme that adds repetitive nucleotide sequences to the telomeres, can counteract this shortening in germ cells, embryonic stem cells, and cancer cells.

**Gene Expression (Polypeptide Synthesis):**
The process by which information encoded in DNA is used to synthesize functional proteins. This involves transcription and translation.

*   **Transcription:** Synthesis of RNA from a DNA template.
    1.  **Initiation:** RNA polymerase binds to a **promoter** region on the DNA, unwinding the double helix.
    2.  **Elongation:** RNA polymerase moves along the DNA template strand, synthesizing an RNA molecule by adding complementary ribonucleotides in the 5' to 3' direction.
    3.  **Termination:** RNA polymerase reaches a terminator sequence, and the RNA molecule is released.
*   **Formation of mRNA from Pre-mRNA in Eukaryotes:**
    *   **Pre-mRNA:** The initial RNA transcript in eukaryotes, containing both coding regions (**exons**) and non-coding regions (**introns**).
    *   **RNA Processing:**
        *   **5' Capping:** A modified guanine nucleotide is added to the 5' end, protecting the mRNA from degradation and aiding ribosome binding.
        *   **3' Polyadenylation:** A poly-A tail (a string of adenine nucleotides) is added to the 3' end, also protecting the mRNA and facilitating export from the nucleus.
        *   **Splicing:** Introns are removed, and exons are ligated together to form a continuous coding sequence. This is carried out by spliceosomes.
    *   **Mature mRNA:** The fully processed mRNA molecule, ready for translation.
*   **Translation:** Synthesis of a polypeptide from an mRNA template, occurring at ribosomes.
    1.  **Initiation:** The small ribosomal subunit binds to the mRNA and the initiator tRNA (carrying methionine) at the start codon (AUG). The large ribosomal subunit then joins, forming a functional ribosome.
    2.  **Elongation:** A cycle of three steps:
        *   **Codon Recognition:** A new tRNA carrying its specific amino acid binds to the mRNA codon in the A site.
        *   **Peptide Bond Formation:** A peptide bond is formed between the amino acid in the A site and the growing polypeptide in the P site, catalyzed by rRNA (a ribozyme).
        *   **Translocation:** The ribosome moves along the mRNA by one codon. The tRNA in the A site moves to the P site, and the tRNA in the P site moves to the E site and is released.
    3.  **Termination:** A stop codon (UAA, UAG, or UGA) is reached. A release factor binds to the stop codon, causing the polypeptide to be released from the ribosome, and the ribosomal subunits dissociate.
*   **Folding:** The newly synthesized polypeptide chain then folds into its specific 3D functional structure, often assisted by chaperones.

#### B. Organisation of Genomes (H2/H3)

Genomes are the complete set of genetic material in an organism. Their organization varies significantly across different life forms.

*   **Viral Genomes:**
    *   **Structure:** Highly diverse. Can be DNA or RNA, single-stranded (ss) or double-stranded (ds), linear or circular, and vary greatly in nucleotide number.
    *   **RNA Viruses:**
        *   **Positive-sense RNA:** Genome acts directly as mRNA and can be immediately translated (e.g., poliovirus).
        *   **Negative-sense RNA:** Genome is complementary to mRNA and must first be transcribed into positive-sense RNA by an RNA polymerase before translation (e.g., influenza virus).
*   **Prokaryotic Genomes (e.g., Bacteria):**
    *   **Structure:** Typically a single, large, circular chromosome of double-stranded DNA.
    *   **Nucleotides:** Generally smaller than eukaryotic genomes, with fewer nucleotides.
    *   **Packing:** DNA is supercoiled and organized into a nucleoid region, but lacks histones.
    *   **Introns:** Generally absent.
    *   **Plasmids:** Small, circular, extrachromosomal DNA molecules that replicate independently. They often carry genes for antibiotic resistance or virulence factors.
*   **Eukaryotic Genomes:**
    *   **Structure:** Multiple linear chromosomes, each composed of double-stranded DNA.
    *   **Nucleotides:** Generally much larger and more complex than prokaryotic genomes.
    *   **Packing:** DNA is tightly packed around histone proteins to form chromatin, which then condenses into chromosomes.
    *   **Introns:** Presence of significant amounts of non-coding DNA (introns) interspersed within coding sequences.
    *   **Organelle DNA:** Mitochondria and chloroplasts also contain small, circular DNA molecules (mtDNA and cpDNA) that resemble prokaryotic genomes.

**Viral Inheritance (Reproductive Cycles) (H2/H3):**

*   **Bacteriophages (e.g., Lambda Phage):**
    *   **Lytic Cycle:**
        1.  **Attachment:** Phage attaches to host cell.
        2.  **Entry:** Phage injects its DNA into the host cell.
        3.  **Synthesis:** Host cell's machinery is hijacked to synthesize phage proteins and replicate phage DNA.
        4.  **Assembly:** Phage components assemble into new phages.
        5.  **Release:** Host cell lyses (bursts), releasing new phages.
    *   **Lysogenic Cycle:**
        1.  **Attachment and Entry:** Same as lytic cycle.
        2.  **Integration:** Phage DNA integrates into the host bacterial chromosome, becoming a **prophage**.
        3.  **Replication:** Prophage DNA is replicated along with the host chromosome during cell division.
        4.  **Induction:** Under certain conditions (e.g., stress), the prophage can excise from the host chromosome and enter the lytic cycle.
*   **Enveloped Viruses (e.g., Influenza):**
    1.  **Attachment:** Viral glycoproteins bind to receptors on the host cell membrane.
    2.  **Entry:** Enveloped virus enters the cell via endocytosis or fusion of the viral envelope with the host membrane.
    3.  **Uncoating:** Viral genetic material is released into the cytoplasm.
    4.  **Replication/Synthesis:** Viral genome is replicated, and viral proteins are synthesized using host machinery.
    5.  **Assembly:** New viral particles are assembled.
    6.  **Budding:** New viruses acquire an envelope by budding from the host cell membrane, often without immediately lysing the cell.
*   **Retroviruses (e.g., HIV):**
    1.  **Attachment:** HIV glycoproteins bind to CD4 and co-receptor proteins on host T helper cells.
    2.  **Entry:** Viral envelope fuses with host membrane, and capsid enters the cell.
    3.  **Reverse Transcription:** Viral RNA genome is reverse transcribed into dsDNA by **reverse transcriptase**.
    4.  **Integration:** Viral DNA (provirus) integrates into the host cell's chromosome, catalyzed by **integrase**.
    5.  **Transcription/Translation:** Host RNA polymerase transcribes the proviral DNA into viral RNA, which is then translated into viral proteins.
    6.  **Assembly/Budding:** New HIV virions assemble and bud from the host cell, acquiring an envelope.

**Variation in Viral Genomes (H2/H3):**

*   **Antigenic Drift:** Minor changes in viral antigens (surface proteins) due to point mutations in the genes encoding these proteins during replication. These small changes accumulate over time, leading to new strains that the immune system may not recognize (e.g., seasonal influenza).
*   **Antigenic Shift:** Abrupt, major changes in viral antigens, usually occurring when two different strains of a virus infect the same host cell and exchange genetic material (reassortment). This can lead to completely new viral subtypes with high pandemic potential (e.g., pandemic influenza strains).

**Prokaryotic Reproduction and Genetic Variation (H2/H3):**

*   **Asexual Reproduction: Binary Fission:**
    *   **Mechanism:** A single prokaryotic cell grows in size, replicates its circular DNA, and then divides into two identical daughter cells. This is a rapid and efficient form of reproduction.
*   **Genetic Variation (without sexual reproduction):**
    *   **Mutation:** Spontaneous changes in the DNA sequence are a primary source of variation.
    *   **Genetic Transfer (Horizontal Gene Transfer):**
        *   **Transformation:** Uptake of naked DNA from the environment by a bacterial cell. The foreign DNA can then be incorporated into the host genome or exist as a plasmid.
        *   **Transduction:** Transfer of bacterial DNA from one bacterium to another via a bacteriophage. During phage replication, some host DNA may be packaged into new phage particles, which then infect another bacterium.
        *   **Conjugation:** Direct transfer of genetic material (usually a plasmid, specifically the F plasmid) from one bacterium to another through a temporary cytoplasmic bridge (pilus). The F plasmid carries genes for pilus formation and DNA transfer, turning an F- cell into an F+ cell.

**Non-coding DNA in Eukaryotes (H2/H3):**
Eukaryotic genomes contain significant amounts of DNA that do not code for proteins or functional RNA molecules.

*   **Introns:** Non-coding sequences within genes that are transcribed into pre-mRNA but removed during RNA splicing.
*   **Centromeres:** Constricted regions on chromosomes that play a crucial role in chromosome segregation during cell division, serving as the attachment point for spindle fibers.
*   **Telomeres:** Repetitive nucleotide sequences at the ends of linear chromosomes that protect the genetic information from degradation and prevent chromosomes from fusing.
*   **Promoters:** DNA sequences located upstream of a gene, where RNA polymerase binds to initiate transcription.
*   **Enhancers:** DNA sequences that can be located far from a gene, which, when bound by activator proteins, increase the rate of transcription.
*   **Silencers:** DNA sequences that bind repressor proteins to decrease the rate of transcription.

#### C. Control of Gene Expression (H2/H3)

Gene expression in eukaryotes is a complex process regulated at multiple levels, allowing for differential gene expression (different genes expressed at different times or in different cells).

*   **Chromatin Level (Epigenetic Control - H3):**
    *   **Histone Modification:** Histones are proteins around which DNA is wound. Modifications (e.g., acetylation, methylation, phosphorylation) to histone tails can alter chromatin structure, making DNA more or less accessible for transcription.
        *   **Histone acetylation:** Generally loosens chromatin, promoting transcription.
        *   **Histone methylation:** Can either promote or repress transcription depending on the specific residues modified.
    *   **DNA Methylation:** Addition of methyl groups to certain cytosine bases in DNA. Heavy methylation typically leads to denser chromatin and gene silencing. This is a stable modification often inherited across cell divisions.
    *   **Chromatin Remodelling (H3):** The dynamic modification of chromatin structure to allow access to DNA for transcription, replication, and repair. This involves ATP-dependent chromatin remodeling complexes that can slide, eject, or restructure nucleosomes.
*   **Transcriptional Level:**
    *   **Control Elements:** Non-coding DNA sequences that serve as binding sites for transcription factors.
        *   **Promoters:** Sites where RNA polymerase binds to initiate transcription.
        *   **Silencers:** DNA sequences that bind repressor proteins to inhibit transcription.
        *   **Enhancers:** DNA sequences that bind activator proteins to increase transcription. They can be located far from the gene.
    *   **Transcription Factors:** Proteins that bind to DNA control elements or to other regulatory proteins to either activate (activators) or repress (repressors) gene transcription.
*   **Post-transcriptional Level:**
    *   **Processing of Pre-mRNA:**
        *   **Splicing:** Removal of introns and ligation of exons. **Alternative splicing** allows a single gene to produce multiple mRNA transcripts and thus different proteins.
        *   **Polyadenylation:** Addition of poly-A tail.
        *   **5' Capping:** Addition of a modified guanine nucleotide.
*   **Translational Level:**
    *   **Half-life of RNA:** The stability of an mRNA molecule (how long it persists in the cytoplasm) affects the amount of protein produced. Regulatory proteins can influence mRNA degradation rates.
    *   **Initiation of Translation:** Regulatory proteins can bind to mRNA, blocking or facilitating ribosome attachment and thus controlling the rate of protein synthesis.
*   **Post-translational Level:**
    *   **Biochemical Modification (H3):** After translation, polypeptides can undergo various modifications to become functional or to alter their activity.
        *   **Cleavage:** Proteolytic enzymes cut the polypeptide chain into smaller, active fragments (e.g., proinsulin to insulin).
        *   **Phosphorylation:** Addition of phosphate groups (catalyzed by kinases) can activate or deactivate proteins.
        *   **Glycosylation:** Addition of carbohydrate chains, crucial for secreted proteins or membrane proteins, affecting their folding, stability, and cell-cell recognition.
    *   **Protein Degradation:** Selective breakdown of proteins by proteasomes (often after ubiquitination) regulates protein abundance and turnover.

**Molecular Techniques to Study Gene Expression (H2/H3):**

*   **Polymerase Chain Reaction (PCR):**
    *   **Principle:** Amplifies specific DNA sequences exponentially *in vitro*.
    *   **Procedure:**
        1.  **Denaturation:** Heat DNA to separate strands ($$94-98^\circ C$$).
        2.  **Annealing:** Cool to allow primers to bind to complementary sequences ($$50-65^\circ C$$).
        3.  **Extension:** Heat to optimal temperature for Taq polymerase to synthesize new DNA strands ($$72^\circ C$$).
    *   **Advantages:** Highly sensitive (can amplify from trace amounts), rapid, specific.
    *   **Limitations:** Requires prior knowledge of DNA sequence for primer design, susceptible to contamination.
*   **Gel Electrophoresis:**
    *   **Principle:** Separates DNA (or RNA or protein) molecules based on size and charge by applying an electric field through a gel matrix.
    *   **Procedure:** Samples loaded into wells in an agarose or polyacrylamide gel. Electric current applied, causing charged molecules to migrate. Smaller molecules move faster and further.
*   **Southern Blotting and Nucleic Acid Hybridization:**
    *   **Principle:** Detects specific DNA sequences in a sample using a labeled probe that hybridizes to complementary sequences.
    *   **Procedure (Southern Blot):**
        1.  DNA is digested with restriction enzymes.
        2.  Fragments separated by gel electrophoresis.
        3.  DNA fragments are transferred (blotted) from the gel to a membrane.
        4.  Membrane is incubated with a labeled DNA or RNA probe that is complementary to the target sequence.
        5.  Probe hybridizes to target DNA, and its location is detected (e.g., by autoradiography).
    *   **Nucleic Acid Hybridization:** The process of forming a double-stranded nucleic acid molecule from two complementary single-stranded molecules. Used in Southern blotting, Northern blotting (for RNA), and *in situ* hybridization.

**Protein Binding Sites and Subunits (H3):**
*   **Protein Binding Sites:** Specific regions on a protein that interact with other molecules (ligands) such as other proteins, nucleic acids, ions, or small molecules. These interactions are highly specific and often involve non-covalent bonds.
*   **Protein Subunits:** Individual polypeptide chains that come together to form a functional protein complex with quaternary structure.
*   **Large Protein and Glycoprotein Molecules (H3):**
    *   **Haemoglobin:** Contains multiple binding sites for oxygen (on each heme group) and forms a tetramer of four subunits.
    *   **Immunoglobulin (Antibodies):** Large glycoprotein molecules (Y-shaped) composed of four polypeptide chains (two heavy, two light). Each arm has antigen-binding sites that recognize specific epitopes.
    *   **Prokaryotic RNA Polymerase:** A multi-subunit enzyme responsible for transcription in prokaryotes. Different subunits have distinct roles in binding DNA, unwinding, and catalysis.
*   **Protein Recognition and Binding (H3):**
    *   Proteins recognize and bind to diverse molecules due to the highly specific **properties and shapes of their surfaces and clefts**.
    *   **Complementary Interactions:** The binding site of a protein has a precise 3D shape and chemical environment (charge distribution, hydrophobic patches) that is complementary to its ligand. This allows for specific non-covalent interactions (hydrogen bonds, ionic bonds, van der Waals forces, hydrophobic interactions) to form, ensuring high affinity and specificity.
    *   **Induced Fit:** Often, binding induces a conformational change in both the protein and the ligand, optimizing the fit and strengthening the interaction.

**Enzyme Regulation in Eukaryotic Cells (H3):**
A living eukaryotic cell regulates thousands of enzymes efficiently through a complex network of control mechanisms.

*   **Compartmentalization:** Enzymes are localized to specific organelles, ensuring reactions occur in the correct environment and preventing unwanted interactions.
*   **Gene Expression Control:** Regulating the synthesis of enzymes at the transcriptional, post-transcriptional, translational, and post-translational levels.
*   **Allosteric Regulation:** Binding of regulatory molecules to allosteric sites on enzymes, leading to conformational changes that activate or inhibit enzyme activity.
*   **Covalent Modification:** Reversible addition/removal of chemical groups (e.g., phosphorylation by kinases, dephosphorylation by phosphatases) to alter enzyme activity.
*   **Feedback Inhibition/Activation:** Product of a metabolic pathway inhibits an enzyme early in the pathway (inhibition) or activates it (activation), regulating flux.
*   **Proteolytic Activation:** Inactive enzyme precursors (zymogens) are activated by specific cleavage (e.g., digestive enzymes).
*   **Enzyme Degradation:** Regulated breakdown of enzymes controls their cellular concentration.

#### D. DNA Mutations

**Gene Mutation vs. Chromosomal Aberration:**

*   **Gene Mutation:** A change in the nucleotide sequence of a single gene.
    *   **Substitution:** Replacement of one nucleotide with another. Can lead to:
        *   **Silent mutation:** No change in amino acid sequence.
        *   **Missense mutation:** Changes one amino acid to another (e.g., sickle cell anemia).
        *   **Nonsense mutation:** Changes an amino acid codon to a stop codon, resulting in a truncated protein.
    *   **Addition (Insertion):** Addition of one or more nucleotides.
    *   **Deletion:** Removal of one or more nucleotides.
    *   **Frameshift Mutation:** Additions or deletions that are not multiples of three nucleotides alter the reading frame of the genetic code, leading to a completely different amino acid sequence downstream and usually a non-functional protein.
*   **Chromosomal Aberration:** A large-scale change in the structure or number of chromosomes.
    *   **Numerical Aberration (Aneuploidy):** Abnormal number of chromosomes.
        *   **Trisomy 21 (Down Syndrome):** Presence of an extra copy of chromosome 21 (three copies instead of two). Caused by non-disjunction during meiosis.
    *   **Structural Aberration:** Changes in chromosome structure.
        *   **Translocation:** A segment of a chromosome moves to a different chromosome.
        *   **Duplication:** A segment of a chromosome is repeated.
        *   **Inversion:** A segment of a chromosome is reversed.
        *   **Deletion:** A segment of a chromosome is lost.

**How Gene Mutations Result in Diseases:**

*   **Sickle Cell Anemia:**
    *   **Mutation:** A single nucleotide substitution (point mutation) in the beta-globin gene, changing a GAG codon to GTG.
    *   **Amino acid change:** This leads to the substitution of glutamic acid (hydrophilic) with valine (hydrophobic) at the sixth position of the beta-globin polypeptide chain.
    *   **Protein effect:** The altered hemoglobin (HbS) molecules aggregate into long fibers when oxygen levels are low, deforming red blood cells into a sickle shape.
    *   **Physiological impact:** Sickled cells clog capillaries, leading to pain, organ damage, and anemia.

**Bioethics of Genetic Maternal Screening for Mutations (H1/H2):**
Genetic maternal screening (e.g., for trisomy-21) provides early information about potential genetic conditions in a fetus, raising complex ethical dilemmas.

*   **Benefits:**
    *   **Informed decision-making:** Parents can make informed choices about pregnancy management, birth plans, and preparing for a child with special needs.
    *   **Early intervention:** Allows for early diagnosis and potential interventions or treatments if available.
    *   **Reduced anxiety:** For parents who receive negative results.
*   **Risks/Ethical Concerns:**
    *   **Maternal autonomy vs. fetal interests:** The dilemma of whether to terminate a pregnancy based on screening results, balancing the mother's choice with the potential life of the fetus.
    *   **Discrimination:** Potential for discrimination against individuals with genetic conditions.
    *   **"Designer babies":** Slippery slope towards selecting for desired traits rather than preventing disease.
    *   **Psychological impact:** False positives or difficult decisions can cause significant emotional distress.
    *   **Accuracy and interpretation:** The possibility of false results or misinterpretation of complex genetic information.
    *   **Accessibility and equity:** Unequal access to screening technologies based on socioeconomic status.

#### E. The Cell Cycle

The cell cycle is the series of events that take place in a cell leading to its division and duplication. It is tightly regulated by checkpoints to ensure accurate replication and segregation of genetic material.

**Mitotic Cell Cycle:**
*   **Purpose:** Essential for growth, tissue repair, and asexual reproduction. Produces two genetically identical daughter cells.
*   **Events:**
    *   **Interphase:** Period of cell growth and DNA replication.
        *   **G1 phase:** Cell grows, synthesizes proteins and organelles.
        *   **S phase:** DNA replication occurs, chromosomes duplicate.
        *   **G2 phase:** Cell grows further, prepares for mitosis.
    *   **M Phase (Mitosis and Cytokinesis):**
        *   **Mitosis:** Nuclear division, involving distinct stages:
            1.  **Prophase:** Chromosomes condense, becoming visible. Mitotic spindle begins to form. Nuclear envelope starts to break down.
            2.  **Metaphase:** Chromosomes align at the metaphase plate (equator of the cell). Each sister chromatid is attached to a spindle microtubule from opposite poles.
            3.  **Anaphase:** Sister chromatids separate and move to opposite poles of the cell, becoming individual chromosomes.
            4.  **Telophase:** Chromosomes arrive at poles and decondense. Nuclear envelopes reform around the two sets of chromosomes. Spindle microtubules disappear.
        *   **Cytokinesis:** Division of the cytoplasm, usually overlapping with telophase, resulting in two separate daughter cells.
*   **Significance:**
    *   **Growth:** Increases the number of cells in a multicellular organism.
    *   **Repair:** Replaces damaged or dead cells.
    *   **Asexual Reproduction:** The primary mode of reproduction for many unicellular organisms and some multicellular organisms.
*   **Regulation and Dysregulation (Cancer):**
    *   **Tight Regulation:** Cell cycle checkpoints (e.g., G1, G2, M) monitor internal and external conditions, ensuring proper progression.
    *   **Dysregulation:** Failure of checkpoints can lead to uncontrolled cell division and cancer.
    *   **Causative Factors of Cancer:**
        *   **Genetic Predisposition:** Inherited mutations in genes that regulate the cell cycle.
        *   **Chemical Carcinogens:** Substances (e.g., components of tobacco smoke, asbestos) that cause DNA damage.
        *   **Ionizing Radiation:** High-energy radiation (e.g., X-rays, UV radiation) that can damage DNA.
        *   **Loss of Immunity (H2/H3):** A weakened immune system may fail to detect and destroy cancerous cells.
    *   **Development of Cancer (Multi-step Process):**
        1.  **Accumulation of Mutations:** Cancer typically arises from a series of somatic mutations in several genes over time.
        2.  **Loss of Function Mutation of Tumour Suppressor Genes (H2/H3):**
            *   **Tumour suppressor genes (e.g., p53):** Encode proteins that normally inhibit cell division, repair DNA, or trigger apoptosis (programmed cell death).
            *   **Effect:** A loss-of-function mutation (e.g., deletion or inactivation) means the brakes on cell division are removed, allowing uncontrolled proliferation.
        3.  **Gain in Function Mutation of Proto-oncogenes (H2/H3):**
            *   **Proto-oncogenes (e.g., ras):** Encode proteins that normally promote cell division and growth.
            *   **Effect:** A gain-of-function mutation (e.g., gene amplification or point mutation) converts a proto-oncogene into an **oncogene**, leading to excessive cell division (accelerator stuck).
        4.  **Angiogenesis:** The formation of new blood vessels to supply nutrients and oxygen to the growing tumor.
        5.  **Metastasis:** The spread of cancer cells from the primary tumor to other parts of the body, forming secondary tumors.

**Meiotic Cell Cycle:**
*   **Purpose:** Reduction division (halves the chromosome number) prior to fertilization to produce gametes (sperm and egg) that are genetically unique.
*   **Events (Main Stages - H2/H3):** Meiosis involves two rounds of cell division (Meiosis I and Meiosis II) after a single round of DNA replication.
    *   **Meiosis I (Reductional Division):** Homologous chromosomes separate.
        *   **Prophase I:** Homologous chromosomes pair up (synapsis) and **crossing over** occurs (exchange of genetic material between non-sister chromatids). Chromosomes condense. Nuclear envelope breaks down.
        *   **Metaphase I:** Homologous pairs align at the metaphase plate for **independent assortment**.
        *   **Anaphase I:** Homologous chromosomes separate and move to opposite poles. Sister chromatids remain attached.
        *   **Telophase I & Cytokinesis:** Two haploid daughter cells are formed, each with duplicated chromosomes.
    *   **Meiosis II (Equational Division):** Sister chromatids separate.
        *   **Prophase II:** Chromosomes condense again.
        *   **Metaphase II:** Chromosomes align at the metaphase plate.
        *   **Anaphase II:** Sister chromatids separate and move to opposite poles.
        *   **Telophase II & Cytokinesis:** Four haploid daughter cells are formed, each with unduplicated chromosomes (gametes).
*   **Significance:**
    *   **Reduction Division:** Halves the chromosome number from diploid ($$2n$$) to haploid ($$n$$), ensuring that fertilization restores the diploid number.
    *   **Genetic Variation:** Meiosis generates genetic variation through:
        *   **Crossing Over (Prophase I):** Exchange of genetic material between homologous chromosomes.
        *   **Independent Assortment (Metaphase I):** Random orientation and segregation of homologous chromosomes.
        *   **Random Fertilization:** Any sperm can fertilize any egg.
    *   This variation is crucial for evolution and the adaptability of a species.

#### F. Inheritance

This section explores the principles governing how traits are passed from one generation to the next, including Mendelian and non-Mendelian patterns, and the influence of the environment.

**Key Genetic Terms:**

*   **Locus:** The specific physical location of a gene on a chromosome.
*   **Allele:** Alternative forms of a gene at a particular locus (e.g., allele for red flower color, allele for white flower color).
*   **Dominant:** An allele that expresses its phenotypic effect even when heterozygous (only one copy is present).
*   **Recessive:** An allele that expresses its phenotypic effect only when homozygous (two copies are present).
*   **Codominant:** Both alleles in a heterozygote are fully expressed in the phenotype (e.g., AB blood type).
*   **Incomplete Dominance:** The phenotype of heterozygotes is intermediate between the phenotypes of the two homozygotes (e.g., pink flowers from red and white parents).
*   **Homozygous:** Having two identical alleles for a particular gene (e.g., $$AA$$ or $$aa$$).
*   **Heterozygous:** Having two different alleles for a particular gene (e.g., $$Aa$$).
*   **Phenotype:** The observable physical or biochemical characteristics of an organism, resulting from the interaction of its genotype and the environment.
*   **Genotype:** The genetic makeup of an organism, referring to the alleles it possesses for a particular gene.
*   **Sex Linkage:** Genes located on a sex chromosome (e.g., X or Y chromosome). Traits associated with these genes often show different inheritance patterns in males and females.

**Gene Inheritance via Germ Cells (Gametes):**
*   During meiosis, alleles for each gene segregate into different gametes. Each gamete receives only one allele for each gene.
*   Upon fertilization, gametes from two parents fuse, combining their alleles to form the genotype of the offspring. This ensures the transmission of genetic information.

**Environmental Effect on Phenotype:**
*   **Explanation:** While genotype provides the genetic potential, the environment can significantly influence how genes are expressed, leading to variations in phenotype.
*   **Example: Differentiation of Honeybees:**
    *   Female honeybee larvae are genetically identical.
    *   Larvae fed **royal jelly** develop into fertile queen bees (larger, longer lifespan, reproductive).
    *   Larvae fed **pollen and nectar** develop into sterile worker bees (smaller, shorter lifespan, non-reproductive).
    *   This demonstrates that diet (an environmental factor) triggers differential gene expression that determines caste.

**Genetic Diagrams (Monohybrid and Dihybrid Crosses):**
Genetic diagrams (Punnett squares, pedigree charts) are used to predict the genotypes and phenotypes of offspring from crosses.

*   **Dihybrid Crosses:** Involve tracking the inheritance of two different genes simultaneously.
    *   **Example: Dihybrid cross for two unlinked genes (e.g., seed color Y/y and seed shape R/r in peas).**
        *   Parental Genotypes: $$YyRr \times YyRr$$
        *   Gametes: $$YR, Yr, yR, yr$$ (from each parent)
        *   Punnett Square (16 squares)
        *   Expected Phenotypic Ratio (if completely dominant): $$9:3:3:1$$ (e.g., 9 yellow round : 3 yellow wrinkled : 3 green round : 1 green wrinkled)
*   **Involving Codominance, Incomplete Dominance, Multiple Alleles, and Sex Linkage:**
    *   **Codominance (e.g., ABO blood group):**
        *   Alleles: $$I^A, I^B, i$$
        *   Cross: $$I^A I^B \times I^A i$$
        *   Offspring: $$I^A I^A$$ (Type A), $$I^A I^B$$ (Type AB), $$I^A i$$ (Type A), $$I^B i$$ (Type B)
    *   **Incomplete Dominance (e.g., flower color):**
        *   Alleles: $$R$$ (red), $$W$$ (white)
        *   Cross: $$RW \times RW$$
        *   Offspring: $$RR$$ (red), $$RW$$ (pink), $$WW$$ (white)
    *   **Multiple Alleles (e.g., ABO blood group):** More than two alleles exist for a gene in the population.
    *   **Sex Linkage (e.g., red-green color blindness, X-linked recessive):**
        *   Alleles: $$X^C$$ (normal vision), $$X^c$$ (color blind)
        *   Male Genotypes: $$X^C Y, X^c Y$$
        *   Female Genotypes: $$X^C X^C, X^C X^c, X^c X^c$$
        *   Cross: Carrier female ($$X^C X^c$$) $$\times$$ Normal male ($$X^C Y$$)
        *   Offspring: $$X^C X^C, X^C X^c, X^C Y, X^c Y$$ (25% chance of color-blind son)
*   **Test Crosses:**
    *   **Purpose:** To determine the genotype of an individual showing a dominant phenotype (e.g., is it homozygous dominant or heterozygous?).
    *   **Procedure:** Cross the individual with unknown genotype with a homozygous recessive individual.
    *   **Interpretation:**
        *   If all offspring show the dominant phenotype, the unknown parent was homozygous dominant.
        *   If some offspring show the recessive phenotype, the unknown parent was heterozygous.

**Linkage and Crossing-Over (H2/H3):**
*   **Linkage:** Genes located on the same chromosome are said to be linked. They tend to be inherited together because they are physically close to each other.
*   **Crossing-Over:** The exchange of genetic material between homologous chromosomes during prophase I of meiosis. This breaks linkages and creates new combinations of alleles on the chromatids.
*   **Effect on Phenotypic Ratios from Dihybrid Crosses:**
    *   If genes are unlinked, a dihybrid cross of heterozygotes (e.g., $$AaBb \times AaBb$$) yields a $$9:3:3:1$$ phenotypic ratio.
    *   If genes are linked and no crossing over occurs, only parental phenotypes are observed.
    *   If genes are linked and crossing over occurs, recombinant phenotypes appear, but their frequency is lower than parental phenotypes. The frequency of recombination is proportional to the distance between the two genes on the chromosome. This is used to construct genetic maps.

**Epistasis (H2/H3):**
*   **Description:** A type of gene interaction where the phenotypic expression of one gene (epistatic gene) masks or modifies the expression of another gene (hypostatic gene) at a different locus.
*   **Predicting Phenotypic Ratios:** The expected $$9:3:3:1$$ dihybrid ratio is modified.
    *   **Example: Recessive epistasis (e.g., coat color in Labrador retrievers).**
        *   Gene E/e: Pigment deposition (E=deposit, e=no deposit, yellow).
        *   Gene B/b: Pigment color (B=black, b=brown).
        *   Genotypes: $$E_ _B_ _$$ (black), $$E_ _bb$$ (brown), $$eeB_ _, eebb$$ (yellow).
        *   Cross: $$EeBb \times EeBb$$
        *   Expected Phenotypic Ratio: $$9$$ black : $$3$$ brown : $$4$$ yellow (instead of $$9:3:3:1$$).

**Continuous vs. Discontinuous Variation (H2/H3):**
*   **Discontinuous Variation:**
    *   **Explanation:** Characteristics controlled by one or a few genes, with distinct categories or phenotypes.
    *   **Examples:** Blood groups, presence or absence of a disease, flower color (red, white, pink).
*   **Continuous Variation:**
    *   **Explanation:** Characteristics controlled by many (polygenic) additive genes, and often significantly influenced by environmental factors. Phenotypes show a continuous range, typically following a normal distribution.
    *   **Examples:** Height, weight, skin color, intelligence.

**Chi-squared Test (H2/H3):**
*   **Purpose:** A statistical test used to determine if there is a significant difference between observed frequencies (results from an experiment) and expected frequencies (predictions based on a hypothesis, e.g., Mendelian ratios). It assesses how well the observed data fit the expected ratio.
*   **Hypotheses:**
    *   **Null Hypothesis ($$H_0$$):** There is no significant difference between observed and expected frequencies (any difference is due to chance).
    *   **Alternative Hypothesis ($$H_1$$):** There is a significant difference (the observed data do not fit the expected ratio).
*   **Formula:**
    $$
    \chi^2 = \sum \frac{(O - E)^2}{E}
    $$
    Where:
    *   $$\chi^2$$ = chi-squared value
    *   $$\sum$$ = sum of
    *   $$O$$ = observed frequency
    *   $$E$$ = expected frequency
*   **Degrees of Freedom ($$\nu$$):** Number of categories (c) minus 1.
    $$
    \nu = c - 1
    $$
*   **Interpretation:**
    1.  Calculate $$\chi^2$$ value.
    2.  Determine degrees of freedom.
    3.  Compare the calculated $$\chi^2$$ value to a critical value from a chi-squared distribution table at a chosen significance level (e.g., $$p = 0.05$$).
    4.  If calculated $$\chi^2 > $$ critical value: Reject $$H_0$$. There is a significant difference.
    5.  If calculated $$\chi^2 < $$ critical value: Fail to reject $$H_0$$. There is no significant difference.

### Core Idea 3: Energy and Equilibrium

This core idea focuses on how organisms acquire, transform, and utilize energy for their survival and growth, and how they respond to maintain a stable internal environment (equilibrium).

#### A. Transformation of Energy between the Environment and Organisms

**Photosynthesis:**
The process used by plants, algae, and some bacteria to convert light energy into chemical energy, stored in carbohydrates. Occurs in **chloroplasts**.

*   **Overall Equation:**
    $$
    6CO_2 + 6H_2O + \text{Light Energy} \rightarrow C_6H_{12}O_6 + 6O_2
    $$
*   **Stages:**
    1.  **Light-Dependent Reactions:** Occur in the thylakoid membranes of chloroplasts.
        *   **Reactants:** Light energy, water ($$H_2O$$), NADP+, ADP + Pi.
        *   **Products:** ATP, NADPH (reduced NADP+), oxygen ($$O_2$$).
        *   **Conversion:** Light energy is converted into chemical energy (ATP and NADPH).
        *   **Photophosphorylation:**
            *   **Non-cyclic photophosphorylation:** Involves both Photosystem II and Photosystem I. Electrons from water (which is split, releasing $$O_2$$) are passed through an electron transport chain (ETC) to Photosystem I, then to NADP+ reductase, ultimately forming ATP and NADPH.
            *   **Cyclic photophosphorylation (H2/H3):** Involves only Photosystem I. Electrons cycle back from the ETC to Photosystem I, generating ATP but no NADPH. This pathway is used when ATP demand is high or NADP+ is limited.
        *   **Chemiosmosis (H2/H3):** The process by which ATP is generated. Light energy drives the pumping of protons ($$H^+$$) from the stroma into the thylakoid lumen, creating a proton gradient. Protons then flow back through ATP synthase, driving ATP synthesis.
    2.  **Light-Independent Reactions (Calvin Cycle):** Occur in the stroma of chloroplasts.
        *   **Reactants:** Carbon dioxide ($$CO_2$$), ATP, NADPH.
        *   **Products:** Glucose (or other sugars), NADP+, ADP + Pi.
        *   **Carbon Fixation (H2/H3):** The initial incorporation of $$CO_2$$ into organic molecules. In C3 plants, $$CO_2$$ is fixed by the enzyme RuBisCO to ribulose-1,5-bisphosphate (RuBP), forming two molecules of 3-phosphoglycerate (PGA).
        *   **PGA Reduction (H2/H3):** PGA molecules are phosphorylated by ATP and reduced by NADPH to form glyceraldehyde-3-phosphate (G3P), a sugar.
        *   **RuBP Regeneration (H2/H3):** Most G3P molecules are used to regenerate RuBP, consuming ATP, to allow the cycle to continue.
        *   **Sugar Synthesis:** Some G3P molecules are used to synthesize glucose and other carbohydrates.
*   **Absorption and Action Spectra (H2/H3):**
    *   **Absorption spectrum:** Shows the wavelengths of light absorbed by photosynthetic pigments (e.g., chlorophyll a, chlorophyll b, carotenoids).
    *   **Action spectrum:** Shows the rate of photosynthesis at different wavelengths of light. It generally matches the absorption spectrum, indicating which wavelengths are most effective for photosynthesis.
*   **Limiting Factors in Photosynthesis (H2/H3):**
    *   **Light Intensity:** As light intensity increases, the rate of photosynthesis increases until other factors become limiting.
    *   **Carbon Dioxide Concentration:** As $$CO_2$$ concentration increases, the rate of photosynthesis increases until other factors become limiting.
    *   **Temperature:** Enzymes involved in photosynthesis have an optimal temperature. Below optimal, rate is low; above optimal, enzymes denature.

**Aerobic Respiration:**
The process by which organisms break down organic molecules (primarily carbohydrates) in the presence of oxygen to release energy (ATP).

*   **Overall Equation:**
    $$
    C_6H_{12}O_6 + 6O_2 \rightarrow 6CO_2 + 6H_2O + \text{Energy (ATP)}
    $$
*   **Stages:**
    1.  **Glycolysis:** Occurs in the **cytoplasm**.
        *   **Reactants:** Glucose, ATP (initial investment), NAD+.
        *   **Products:** 2 pyruvate, 2 ATP (net), 2 NADH (reduced NAD+).
        *   **Process:** Glucose is broken down into two molecules of pyruvate.
    2.  **Link Reaction:** Occurs in the **mitochondrial matrix**.
        *   **Reactants:** 2 pyruvate, NAD+, Coenzyme A.
        *   **Products:** 2 acetyl-CoA, 2 $$CO_2$$ (decarboxylation), 2 NADH (dehydrogenation).
        *   **Process:** Pyruvate is converted to acetyl-CoA, releasing $$CO_2$$.
    3.  **Krebs Cycle (Citric Acid Cycle):** Occurs in the **mitochondrial matrix**.
        *   **Reactants:** 2 acetyl-CoA, NAD+, FAD, ADP + Pi.
        *   **Products:** 4 $$CO_2$$ (decarboxylation), 6 NADH (dehydrogenation), 2 FADH2 (reduced FAD), 2 ATP (or GTP).
        *   **Process:** Acetyl-CoA is completely oxidized, releasing $$CO_2$$ and generating electron carriers.
    4.  **Oxidative Phosphorylation:** Occurs in the **inner mitochondrial membrane**.
        *   **Reactants:** NADH, FADH2, $$O_2$$, ADP + Pi.
        *   **Products:** Large amount of ATP, $$H_2O$$, NAD+, FAD.
        *   **Roles of Oxygen and ETC (H2/H3):**
            *   **Electron Transport Chain (ETC):** Electrons from NADH and FADH2 are passed down a series of protein complexes embedded in the inner mitochondrial membrane. This electron flow releases energy, which is used to pump protons ($$H^+$$) from the mitochondrial matrix into the intermembrane space, creating a proton gradient.
            *   **Oxygen:** Acts as the final electron acceptor at the end of the ETC, combining with electrons and protons to form water ($$H_2O$$). Without oxygen, the ETC backs up, and ATP production ceases.
        *   **Chemiosmosis (H2/H3):** Protons flow back from the intermembrane space through ATP synthase (embedded in the inner membrane) into the matrix, driving the synthesis of ATP. This is the main ATP-generating step.
*   **Factors Affecting Respiration Rate (H2/H3):**
    *   **Substrate Concentration:** Increasing glucose availability generally increases respiration rate until enzymes are saturated.
    *   **Oxygen Concentration:** Aerobic respiration requires oxygen. Low oxygen levels will switch to anaerobic respiration, reducing ATP yield.
    *   **Temperature:** Enzymes involved in respiration have an optimal temperature. Deviations lead to decreased rates or denaturation.

**Anaerobic Respiration (Fermentation):**
Occurs in the absence of oxygen, yielding significantly less ATP than aerobic respiration.

*   **Process:** Glycolysis occurs, but pyruvate is then converted into other products to regenerate NAD+ (from NADH), allowing glycolysis to continue.
*   **In Yeast:**
    *   **Alcoholic Fermentation:** Pyruvate is converted to ethanol and carbon dioxide.
        *   $$Glucose \rightarrow 2 \text{ Pyruvate} \rightarrow 2 \text{ Acetaldehyde} + 2CO_2 \rightarrow 2 \text{ Ethanol}$$
    *   **Significance of Ethanol Formation (H2/H3):** Regeneration of NAD+ from NADH, which is essential for glycolysis to continue producing a small amount of ATP.
*   **In Mammalian Muscle Tissue:**
    *   **Lactic Acid Fermentation:** Pyruvate is converted to lactate.
        *   $$Glucose \rightarrow 2 \text{ Pyruvate} \rightarrow 2 \text{ Lactate}$$
    *   **Significance of Lactate Formation (H2/H3):** Regeneration of NAD+ from NADH, allowing glycolysis to continue supplying ATP during intense exercise when oxygen supply is insufficient. Lactate can be converted back to pyruvate or glucose in the liver.
*   **Energy Release:** Aerobic respiration releases significantly more energy (approx. 30-32 ATP per glucose) than anaerobic respiration (2 ATP per glucose).

**Carbon Fixation in Different Photosynthetic Pathways (H3):**
Different plant types have evolved adaptations to optimize carbon fixation under various environmental conditions, particularly to minimize photorespiration.

*   **C3 Plants:** The most common type. $$CO_2$$ is fixed directly by RuBisCO into a 3-carbon compound (PGA).
    *   **Photorespiration:** Under hot, dry conditions, stomata close to conserve water, leading to low internal $$CO_2$$ and high $$O_2$$. RuBisCO then binds $$O_2$$ instead of $$CO_2$$, consuming ATP and releasing $$CO_2$$ without producing sugar, reducing photosynthetic efficiency.
*   **C4 Plants (e.g., Maize, Sorghum):** Adapted to hot, dry climates to minimize photorespiration.
    *   **Leaf Anatomy:** **Spatial separation** of carbon fixation. Have Kranz anatomy: mesophyll cells (outer layer) and bundle-sheath cells (inner layer around vascular bundles).
    *   **Physiology:**
        1.  **Initial Carbon Fixation:** In mesophyll cells, $$CO_2$$ is fixed by PEP carboxylase (has high affinity for $$CO_2$$ and no affinity for $$O_2$$) into a 4-carbon compound (e.g., oxaloacetate).
        2.  **$$CO_2$$ Concentration:** The 4-carbon compound is transported to bundle-sheath cells, where it releases $$CO_2$$. This concentrates $$CO_2$$ around RuBisCO, minimizing photorespiration.
        3.  **Calvin Cycle:** The Calvin cycle then proceeds in the bundle-sheath cells.
    *   **Enzyme Optimum Temperatures:** Enzymes like PEP carboxylase have high optimum temperatures, allowing efficient photosynthesis in hot conditions.
*   **CAM Plants (Crassulacean Acid Metabolism) (H3):** Adapted to arid environments to minimize water loss.
    *   **Physiology:** **Temporal separation** of carbon fixation.
        1.  **Night:** Stomata open, $$CO_2$$ is taken up and fixed by PEP carboxylase into organic acids (e.g., malate), which are stored in vacuoles. This minimizes water loss during the day.
        2.  **Day:** Stomata close to conserve water. Stored organic acids release $$CO_2$$ to the Calvin cycle.
*   **Importance in Mitigating Global Warming (H3):**
    *   **Carbon Sequestration:** All photosynthetic organisms (C3, C4, CAM plants, and algae) remove $$CO_2$$ from the atmosphere and fix it into organic compounds, acting as carbon sinks.
    *   **C4 and CAM Plants:** More efficient at carbon fixation in hot/dry conditions, potentially contributing more to carbon sequestration in changing climates.
    *   **Algae (including reef-building corals):** Marine algae are major primary producers and carbon sinks. Coral reefs, through the symbiotic relationship with algae (zooxanthellae), play a significant role in carbon cycling and biodiversity. Their health is crucial for marine carbon sequestration.

**Atmospheric Oxygen Concentration and Evolution (H3):**
*   **Early Earth:** Primitive Earth had a largely anoxic (oxygen-free) atmosphere. Early life forms were anaerobic.
*   **Rise of Photosynthesis (Cyanobacteria):** Around 2.5-3.5 billion years ago, photosynthetic prokaryotes (cyanobacteria) evolved, releasing $$O_2$$ as a byproduct.
*   **Great Oxidation Event:** The accumulation of $$O_2$$ in the atmosphere was toxic to many anaerobic organisms, leading to mass extinctions but also driving the evolution of aerobic respiration.
*   **Importance of Changes:**
    *   **Aerobic Respiration:** The presence of $$O_2$$ allowed the evolution of highly efficient aerobic respiration, yielding much more ATP, which facilitated the evolution of larger, more complex multicellular organisms.
    *   **Ozone Layer:** $$O_2$$ in the upper atmosphere formed the ozone layer ($$O_3$$), which shielded Earth's surface from harmful UV radiation, allowing life to colonize land.
    *   **Diversification of Life:** The changes in atmospheric oxygen profoundly shaped the course of evolution, leading to the vast diversity of life we see today.

#### B. Communication and Equilibrium in Organisms

Organisms maintain a stable internal environment (homeostasis) through complex communication systems, primarily involving cell signaling.

**Main Stages of Cell Signaling (H2/H3):**
Cell signaling pathways allow cells to respond to internal and external stimuli.

1.  **Ligand-Receptor Interaction:**
    *   **Ligand:** A signaling molecule (e.g., hormone, neurotransmitter) that binds specifically to a receptor.
    *   **Receptor:** A protein (often on the cell surface membrane or intracellularly) that binds to a specific ligand. Binding causes a conformational change in the receptor.
2.  **Signal Transduction:**
    *   **Explanation:** The relay of the signal from the receptor to target molecules within the cell. This often involves a cascade of molecular interactions.
    *   **Phosphorylation Cascade:** A common mechanism where a series of protein kinases sequentially phosphorylate and activate each other, amplifying the signal.
    *   **Signal Amplification:** Each step in the cascade can activate multiple downstream molecules, leading to a large cellular response from a small initial signal.
3.  **Cellular Response:**
    *   **Explanation:** The specific activity or change in cell function triggered by the transduced signal.
    *   **Examples:** Altered gene expression (e.g., synthesis of new proteins), activation of enzymes, changes in cell shape or movement, secretion of molecules.

**Second Messengers (H2/H3):**
*   **Explanation:** Small, non-protein, water-soluble molecules or ions that relay signals from receptors on the cell surface to target molecules inside the cell. They rapidly diffuse and amplify the signal.
*   **Example: Cyclic AMP (cAMP):**
    *   A common second messenger produced from ATP by adenylyl cyclase, often activated by G-protein-linked receptors.
    *   Activates protein kinase A (PKA), which then phosphorylates other proteins, leading to a cellular response.

**Kinases and Phosphatases in Signal Amplification (H2/H3):**
*   **Kinases:** Enzymes that add phosphate groups (phosphorylation) to proteins. This often activates or deactivates the target protein, relaying and amplifying the signal.
*   **Phosphatases:** Enzymes that remove phosphate groups (dephosphorylation) from proteins. This typically deactivates proteins, turning off the signal and allowing the pathway to reset.
*   **Role in Amplification:** In a phosphorylation cascade, one activated kinase can phosphorylate many target proteins, which in turn can each phosphorylate many more, leading to a large amplification of the initial signal.

**Regulation of Blood Glucose by Insulin and Glucagon (H2/H3):**
*   **Hormones:** Insulin and glucagon are peptide hormones secreted by the pancreas that maintain blood glucose homeostasis.
*   **Insulin (when blood glucose is high):**
    1.  **Ligand-Receptor Interaction:** Insulin binds to **tyrosine kinase receptors** on target cells (liver, muscle, adipose cells).
    2.  **Conformational Change:** Binding causes the receptor to dimerize and autophosphorylate its tyrosine residues.
    3.  **Signal Transduction:** Activated receptor phosphorylates other intracellular proteins, initiating a downstream signaling cascade.
    4.  **Cellular Response:**
        *   Increases glucose uptake by muscle and adipose cells (via GLUT4 translocation).
        *   Promotes glycogenesis (glucose to glycogen) in liver and muscle.
        *   Promotes fat synthesis.
        *   Leads to a decrease in blood glucose.
*   **Glucagon (when blood glucose is low):**
    1.  **Ligand-Receptor Interaction:** Glucagon binds to **G-protein-linked receptors** on target cells (primarily liver cells).
    2.  **Conformational Change:** Binding activates a G protein.
    3.  **Signal Transduction:** Activated G protein activates adenylyl cyclase, which produces cAMP (a second messenger). cAMP activates protein kinase A.
    4.  **Cellular Response:**
        *   Promotes glycogenolysis (glycogen to glucose) in the liver.
        *   Promotes gluconeogenesis (synthesis of glucose from non-carbohydrate sources) in the liver.
        *   Leads to an increase in blood glucose.
*   **Homeostasis:** This antagonistic action of insulin and glucagon maintains blood glucose within a narrow range, essential for optimal cell function.
*   **Disease: Diabetes:** Results from dysregulation of blood glucose, either due to insufficient insulin production (Type 1) or impaired cellular response to insulin (Type 2).

**Transmission of an Action Potential along a Myelinated Neuron (H3):**
*   **Action Potential:** A brief, rapid, and reversible change in the electrical potential across a neuron's membrane, allowing for long-distance signal transmission.
*   **Myelination:** The axon is covered by a myelin sheath (formed by Schwann cells in PNS, oligodendrocytes in CNS), which acts as an electrical insulator. Gaps in the myelin sheath are called Nodes of Ranvier.
*   **Importance of Na+ and K+ ions:**
    1.  **Resting Potential:** Maintained by Na+/K+ pumps and leak channels, with higher K+ inside and Na+ outside.
    2.  **Depolarization (Rising Phase):** A stimulus causes voltage-gated Na+ channels at a Node of Ranvier to open. Na+ ions rush into the cell, causing the membrane potential to become positive.
    3.  **Repolarization (Falling Phase):** Voltage-gated Na+ channels inactivate, and voltage-gated K+ channels open. K+ ions flow out of the cell, restoring the negative membrane potential.
    4.  **Hyperpolarization (Undershoot):** K+ channels close slowly, causing a brief period of hyperpolarization before returning to resting potential.
*   **Saltatory Conduction:** In myelinated neurons, action potentials "jump" from one Node of Ranvier to the next. This is because the myelin sheath prevents ion flow, so depolarization only occurs at the nodes. This significantly increases the speed of impulse transmission compared to unmyelinated neurons.

**Structure and Function of a Cholinergic Synapse (H3):**
*   **Synapse:** The junction between two neurons or between a neuron and an effector cell, where signals are transmitted.
*   **Cholinergic Synapse:** A synapse that uses acetylcholine (ACh) as its neurotransmitter.
*   **Structure:**
    1.  **Presynaptic Terminal:** Contains synaptic vesicles filled with ACh.
    2.  **Synaptic Cleft:** The small gap between the presynaptic and postsynaptic membranes.
    3.  **Postsynaptic Membrane:** Contains ACh receptors (ligand-gated ion channels).
*   **Function (Role of Ca2+ ions):**
    1.  **Action Potential Arrival:** An action potential arrives at the presynaptic terminal.
    2.  **Ca2+ Influx:** Depolarization opens voltage-gated Ca2+ channels in the presynaptic membrane. **Ca2+ ions rush into the terminal.**
    3.  **Neurotransmitter Release:** The influx of Ca2+ triggers the fusion of synaptic vesicles with the presynaptic membrane, releasing ACh into the synaptic cleft by exocytosis.
    4.  **Binding to Receptors:** ACh diffuses across the cleft and binds to ACh receptors on the postsynaptic membrane.
    5.  **Postsynaptic Potential:** Binding opens ligand-gated ion channels, causing ion flow (e.g., Na+ influx) that generates a postsynaptic potential (excitatory or inhibitory) in the postsynaptic neuron.
    6.  **ACh Breakdown:** Acetylcholinesterase (an enzyme in the synaptic cleft) rapidly breaks down ACh, terminating the signal and allowing the postsynaptic membrane to repolarize.

**Principles of Homeostasis (H3):**
*   **Homeostasis:** The maintenance of a relatively constant internal environment in an organism, despite changes in the external environment.
*   **Need for Control:** Organized biological systems require control to maintain optimal conditions for enzyme activity, cell function, and overall survival.
*   **Components of a Homeostatic Control System:**
    1.  **Stimulus:** A change in the internal or external environment.
    2.  **Receptor:** Detects the change (e.g., thermoreceptors for temperature, chemoreceptors for glucose).
    3.  **Control Center:** Processes information from the receptor and initiates a response (e.g., brain, pancreas).
    4.  **Effector:** Carries out the response to counteract the change (e.g., muscles, glands).
    5.  **Response:** The action taken to restore equilibrium.
*   **Negative Feedback:** The primary mechanism of homeostasis. The response counteracts the initial stimulus, reducing its intensity and bringing the system back to its set point.
    *   **Example:** Regulation of body temperature: If body temperature rises (stimulus), thermoreceptors detect it, the brain (control center) signals sweat glands (effectors) to produce sweat, which cools the body (response), reducing the initial stimulus.

**Need for Different Communication Systems (H3):**
Organisms require diverse communication systems to coordinate complex physiological processes over different distances and timescales.

*   **Nervous System:**
    *   **Nature:** Electrical (action potentials) and chemical (neurotransmitters).
    *   **Speed:** Rapid (milliseconds).
    *   **Duration:** Short-lived.
    *   **Specificity:** Highly specific (neuron-to-neuron or neuron-to-effector).
    *   **Role:** Rapid responses to external stimuli, muscle contraction, sensory perception.
*   **Endocrine System:**
    *   **Nature:** Chemical (hormones).
    *   **Speed:** Slower (seconds to hours).
    *   **Duration:** Longer-lasting.
    *   **Specificity:** Broad (hormones travel via bloodstream to target cells with specific receptors).
    *   **Role:** Regulation of growth, metabolism, reproduction, stress response, maintaining long-term homeostasis.
*   **Local Communication (e.g., Paracrine, Autocrine):**
    *   **Nature:** Chemical (local mediators).
    *   **Speed:** Intermediate.
    *   **Duration:** Short.
    *   **Specificity:** Localized.
    *   **Role:** Inflammation, tissue repair, cell proliferation.

These systems often interact and complement each other to achieve precise and coordinated control within the organism.

### Core Idea 4: Biological Evolution

This core idea explores the mechanisms and patterns of evolutionary change, explaining the diversity of life on Earth and the concept of species.

#### A. Natural Selection and Adaptation

**Definition of Evolution:**
*   **Descent with Modification:** Evolution is the process by which species accumulate changes in their heritable traits over successive generations, leading to new species and increased diversity.

**Natural Selection as the Major Driving Mechanism:**
Natural selection is a key mechanism of evolution, proposed by Charles Darwin and Alfred Wallace. It acts on individuals, but its effects are observed in populations.

*   **Key Factors:**
    1.  **Potential for Increase in Number:** Organisms typically produce more offspring than their environment can support, leading to competition.
    2.  **Genetic Variation:** Individuals within a population exhibit heritable variation in their traits. This variation arises from:
        *   **Mutation:** Random changes in DNA sequence, the ultimate source of new alleles.
        *   **Meiosis:** Creates new combinations of alleles through crossing over and independent assortment.
        *   **Sexual Reproduction:** Combines alleles from two parents, generating unique offspring genotypes.
    3.  **Competition for Limited Resources:** Individuals within a population compete for resources (food, water, mates, space).
    4.  **Differential Survival and Reproduction:** Individuals with advantageous heritable traits (adaptations) are better suited to their environment, making them more likely to survive, reproduce, and pass on those traits to their offspring.
*   **Role in Evolution:** Over generations, the proportion of individuals with favorable traits increases in the population, leading to a change in the genetic makeup of the population and, eventually, the evolution of new species.
*   **Adaptation:** The accumulation of favorable genetic changes through natural selection, resulting in organisms that are anatomically, behaviorally, and physiologically well-suited to their specific environment.

**Population as the Smallest Unit that Can Evolve (H2/H3):**
*   **Explanation:** Individual organisms do not evolve; their genetic makeup is fixed. Evolution occurs as the genetic composition (allele frequencies) of a **population** changes over generations in response to selective pressures. Natural selection acts on the phenotypic variation within a population, leading to changes in allele frequencies over time.

**Preservation of Genetic Variation (H2/H3):**
Even harmful recessive alleles can be preserved in a natural population.

*   **Heterozygote Advantage:** In some cases, heterozygotes (carrying one copy of a harmful recessive allele) have a higher fitness than either homozygote.
    *   **Example: Sickle cell trait:** Individuals heterozygous for the sickle cell allele ($$Hb^A Hb^S$$) are resistant to malaria, while homozygous dominant ($$Hb^A Hb^A$$) individuals are susceptible to malaria, and homozygous recessive ($$Hb^S Hb^S$$) individuals suffer from sickle cell anemia. This maintains the harmful $$Hb^S$$ allele in malaria-prone regions.
*   **Diploidy:** In diploid organisms, recessive alleles are "hidden" in heterozygotes, where they are not expressed phenotypically and thus not exposed to natural selection. They can persist in the gene pool and provide potential variation for future environmental changes.
*   **Frequency-Dependent Selection:** The fitness of a phenotype depends on its frequency in the population. Rare phenotypes may have an advantage.
*   **Neutral Variation:** Genetic variation that does not confer a selective advantage or disadvantage.

**Biological Concept of the Species (H1/H2/H3):**
*   **Definition:** A group of populations whose members have the potential to interbreed in nature and produce fertile, viable offspring. They are reproductively isolated from other such groups.
*   **Limitations:**
    *   **Asexual organisms:** Does not apply to organisms that reproduce asexually (e.g., bacteria, some plants).
    *   **Fossils:** Cannot be applied to extinct organisms known only from fossils.
    *   **Hybridization:** Some distinct species can hybridize in nature and produce fertile offspring (e.g., some plant species).
    *   **Geographical isolation:** Difficult to apply to geographically separated populations that could potentially interbreed if brought together.

#### B. Evolution and Biodiversity, Species and Speciation (H2/H3)

**Biological Evolution as Descent with Modification:**
*   **Micro-evolution:** Changes in allele frequencies in a population over generations. This is the raw material for macro-evolution.
*   **Macro-evolution:** Evolutionary change above the species level, including the origin of new taxonomic groups and major evolutionary trends. It is the cumulative effect of many micro-evolutionary changes.

**Evidence for Darwin's Theory of Evolution:**
*   **Homologies (Shared Ancestry):**
    *   **Molecular Homologies:** Similarities in DNA sequences, RNA sequences, or amino acid sequences among different species. The more closely related species are, the more similar their molecular makeup. This provides strong evidence for common ancestry and descent with modification.
    *   **Anatomical Homologies (Fossil Record):** Similarities in structural features among different species, even if they have different functions (e.g., forelimbs of mammals). The fossil record provides a chronological sequence of evolutionary change, showing intermediate forms and the gradual modification of structures over vast periods.
*   **Biogeography (Wallace's Findings):**
    *   **Explanation:** The geographical distribution of species provides evidence for evolution. Species found in particular regions are often more closely related to each other than to species in distant regions, even if the distant regions have similar environments.
    *   **Wallace's Findings:** Alfred Russel Wallace observed distinct faunal regions separated by geographical barriers (e.g., the Wallace Line in Southeast Asia), suggesting that species evolved in specific locations and diversified from ancestral forms.

**Biological Classification and Evolutionary Relationships:**
*   **Definition:** The organization of species into hierarchical groups based on shared characteristics.
*   **Evolutionary Relationship:** Classification should reflect evolutionary history (phylogeny). Groups that share more recent common ancestors are grouped more closely.

**Speciation (Formation of New Species):**
The process by which one species splits into two or more species, driven by reproductive isolation.

*   **Allopatric Speciation (Geographical Isolation):**
    *   **Mechanism:** A physical barrier (e.g., mountain range, river, ocean) separates a population, preventing gene flow. The isolated populations then diverge genetically due to different selective pressures, mutations, and genetic drift. Over time, they become reproductively isolated.
*   **Sympatric Speciation (Behavioral or Physiological Isolation):**
    *   **Mechanism:** Speciation occurs within the same geographical area without physical separation. Reproductive isolation arises from intrinsic factors.
    *   **Behavioral Isolation:** Differences in mating rituals, courtship displays, or signaling cues prevent interbreeding.
    *   **Physiological Isolation:** Incompatibility of reproductive organs, gametes, or different breeding times.
    *   **Polyploidy (H3):** A common mechanism in plants where an organism has more than two complete sets of chromosomes. This can lead to immediate reproductive isolation from the parental species.

**Phylogeny and Molecular Methods:**
*   **Phylogeny:** The evolutionary history of a species or group of related species, often depicted as a branching diagram called a phylogenetic tree or cladogram.
*   **Importance of Genome Sequences (H2/H3):**
    *   **Reconstructing Relationships:** Comparing DNA or protein sequences provides detailed, quantitative data to infer evolutionary relationships, as genetic changes accumulate over time.
    *   **Advantages of Molecular Methods:**
        *   **Objective:** Less subjective than morphological comparisons.
        *   **Quantitative:** Provides measurable differences.
        *   **Deep Evolutionary Time:** Can resolve relationships among distantly related organisms (using slowly evolving genes) or closely related ones (using rapidly evolving genes).
        *   **Multiple Sequence Alignment:** Aligning homologous DNA or amino acid sequences allows identification of conserved regions and differences, providing insights into evolutionary divergence.

**Hardy-Weinberg Model (H2/H3):**
*   **Explanation:** A mathematical model that describes a hypothetical population that is not evolving. It provides a baseline to compare real populations to, allowing us to detect evolutionary change.
*   **Conditions/Assumptions for a Non-Evolving Population:**
    1.  **No Mutation:** No new alleles are introduced.
    2.  **Random Mating:** Individuals mate randomly, without preference for genotype.
    3.  **No Natural Selection:** All genotypes have equal survival and reproductive rates.
    4.  **Extremely Large Population Size:** No genetic drift (random fluctuations in allele frequencies).
    5.  **No Gene Flow:** No migration of individuals into or out of the population.
*   **Hardy-Weinberg Equation:** For a gene with two alleles, $$p$$ (frequency of dominant allele) and $$q$$ (frequency of recessive allele):
    *   **Allele Frequencies:**
        $$
        p + q = 1
        $$
    *   **Genotype Frequencies:**
        $$
        p^2 + 2pq + q^2 = 1
        $$
        Where:
        *   $$p^2$$ = frequency of homozygous dominant genotype
        *   $$2pq$$ = frequency of heterozygous genotype
        *   $$q^2$$ = frequency of homozygous recessive genotype
*   **Calculation Example:**
    *   **Problem:** In a population of 1000 individuals, 160 have a recessive phenotype (e.g., white flowers). Assuming the population is in Hardy-Weinberg equilibrium, calculate the frequencies of the alleles, genotypes, and phenotypes.
    *   **Solution:**
        1.  **Frequency of recessive phenotype ($$q^2$$):**
            $$
            q^2 = \frac{160}{1000} = 0.16
            $$
        2.  **Frequency of recessive allele ($$q$$):**
            $$
            q = \sqrt{0.16} = 0.4
            $$
        3.  **Frequency of dominant allele ($$p$$):**
            $$
            p = 1 - q = 1 - 0.4 = 0.6
            $$
        4.  **Frequency of homozygous dominant genotype ($$p^2$$):**
            $$
            p^2 = (0.6)^2 = 0.36
            $$
        5.  **Frequency of heterozygous genotype ($$2pq$$):**
            $$
            2pq = 2(0.6)(0.4) = 0.48
            $$
        6.  **Check:** $$0.36 + 0.48 + 0.16 = 1$$
        7.  **Phenotype Frequencies:**
            *   Dominant phenotype (homozygous dominant + heterozygous) = $$p^2 + 2pq = 0.36 + 0.48 = 0.84$$
            *   Recessive phenotype = $$q^2 = 0.16$$

**Sexual Selection (H3):**
*   **Explanation:** A form of natural selection where individuals with certain inherited characteristics are more likely than others to obtain mates. It often leads to the evolution of elaborate traits (e.g., peacock feathers, deer antlers) that may seem detrimental to survival but enhance reproductive success.
*   **Significance:** Drives the evolution of secondary sexual characteristics and can lead to sexual dimorphism (differences between sexes).

**Adaptive Radiation (H3):**
*   **Explanation:** A process in which organisms diversify rapidly from an ancestral species into a multitude of new forms, particularly when a change in the environment makes new resources available, creates new challenges, or opens new environmental niches.
*   **Examples:** Darwin's finches on the Galápagos Islands, Cichlid fish in African Great Lakes.

**Ring Species (H3):**
*   **Explanation:** A series of populations that are distributed in a ring-like fashion, where adjacent populations can interbreed, but the two "end" populations of the ring are reproductively isolated from each other. This illustrates how speciation can occur gradually across a geographical range.
*   **Example:** *Ensatina* salamanders around the Central Valley of California.

**Polyploidy, Hybridization, and Introgression in Evolution (H3):**
*   **Polyploidy:** The condition of having more than two complete sets of chromosomes. Common in plants, it can lead to instant speciation as polyploid individuals are often reproductively isolated from diploid parents.
*   **Hybridization:** The interbreeding of individuals from two different species, often resulting in hybrid offspring. Hybrids are often infertile, but sometimes they can be fertile and form new species (hybrid speciation), especially if accompanied by polyploidy.
*   **Introgression:** The movement of genes from one species into the gene pool of another species through repeated backcrossing of a hybrid with one of its parental species. This can introduce new genetic variation into a species.
*   **Implications for Reconstructing Phylogenies:** These processes (especially hybridization and introgression) can complicate the reconstruction of phylogenetic trees, as they involve gene flow between distinct evolutionary lineages, leading to a "web-like" rather than purely branching pattern of evolution.

**Significance of Biomolecules and Biochemical Processes to Understanding Evolution (H3):**
*   **Biomolecules (Carbohydrates, Lipids, Proteins, Nucleic Acids):**
    *   **Universal Ancestry:** The fundamental similarity in the types of biomolecules and their basic structures (e.g., DNA, RNA, 20 amino acids, ATP as energy currency) across all life forms provides strong evidence for a common ancestor.
    *   **Molecular Clock:** Accumulation of mutations in DNA and protein sequences over time can be used to estimate divergence times between species, acting as a "molecular clock."
    *   **Shared Pathways:** Conserved biochemical pathways (e.g., glycolysis, Krebs cycle) suggest common evolutionary origins.
*   **Biochemical Processes (Synthesis):**
    *   **Conservation:** The highly conserved mechanisms of DNA replication, transcription, and translation highlight their essential roles and ancient origins, reflecting shared evolutionary heritage.
    *   **Evolution of Complexity:** Modifications and elaborations of these basic processes (e.g., RNA splicing, gene regulation) have contributed to the evolution of increased biological complexity and diversity.

### Extension Topic A: Infectious Diseases (H2/H3)

This topic explores the biological basis of infectious diseases, the human immune response, and strategies for prevention and control, including epidemiological concepts.

#### A. The Immune System

**Specific (Adaptive) vs. Non-Specific (Innate) Immunity:**

*   **Non-Specific (Innate) Immune System:**
    *   **Characteristics:** First line of defense, non-specific, rapid response, no memory.
    *   **Components:**
        *   **Physical barriers:** Skin, mucous membranes.
        *   **Chemical barriers:** Lysozyme, stomach acid.
        *   **Cellular components:** Phagocytes (macrophages, neutrophils), natural killer (NK) cells.
        *   **Inflammatory response:** Redness, swelling, heat, pain.
*   **Specific (Adaptive) Immune System:**
    *   **Characteristics:** Acquired, specific recognition of pathogens, slower initial response, develops memory.
    *   **Components:** Lymphocytes (B cells, T cells), antibodies.
    *   **Types of Acquired Immunity:**
        *   **Active Immunity:** Develops when the immune system is activated by exposure to a pathogen or vaccine, producing memory cells.
            *   **Naturally acquired active immunity:** From infection.
            *   **Artificially acquired active immunity:** From vaccination.
        *   **Passive Immunity:** Short-term immunity resulting from the transfer of antibodies from another individual; no memory cells are produced.
            *   **Naturally acquired passive immunity:** Maternal antibodies passed to fetus/infant (placenta, breast milk).
            *   **Artificially acquired passive immunity:** Injection of antibodies (e.g., antitoxins).

**Roles of B Lymphocytes, T Lymphocytes, Antigen-Presenting Cells, and Memory Cells:**

*   **Antigen-Presenting Cells (APCs):** (e.g., macrophages, dendritic cells) engulf pathogens, process their antigens, and present them on their surface (MHC molecules) to T helper cells.
*   **T Lymphocytes (T cells):** Mature in the thymus.
    *   **T helper cells (CD4+):** Recognize antigens presented by APCs. Once activated, they secrete cytokines that stimulate both B cells and cytotoxic T cells. Crucial for coordinating the adaptive immune response.
    *   **Cytotoxic T cells (CD8+):** Recognize and kill infected host cells (presenting viral or bacterial antigens on MHC I) or cancer cells.
*   **B Lymphocytes (B cells):** Mature in the bone marrow.
    *   **Role:** Recognize specific antigens, often with the help of T helper cells. Upon activation, they differentiate into **plasma cells** (which produce and secrete large amounts of antibodies) and **memory B cells**.
*   **Memory Cells (B cells and T cells):** Long-lived lymphocytes produced during the primary immune response.
    *   **Role:** Provide immunological memory, allowing for a faster, stronger, and more prolonged **secondary immune response** upon subsequent exposure to the same pathogen.

**Molecular Structure of Antibodies (Immunoglobulin G, IgG) and Functions:**

*   **Structure of IgG:** A Y-shaped glycoprotein composed of four polypeptide chains: two identical heavy chains and two identical light chains, held together by disulfide bonds.
    *   **Variable regions:** At the tips of the Y, these regions differ among antibodies and contain the **antigen-binding sites**, which are highly specific for particular epitopes on antigens.
    *   **Constant regions:** Form the "stem" and lower parts of the arms, determining the antibody class and mediating effector functions.
*   **Functions:**
    1.  **Neutralization:** Bind to toxins or pathogens, blocking their ability to bind to host cells.
    2.  **Opsonization:** Coat pathogens, making them more easily recognized and engulfed by phagocytes.
    3.  **Agglutination:** Clump together pathogens, making them easier for phagocytes to engulf.
    4.  **Complement Activation:** Trigger the complement system, a cascade of proteins that can lyse pathogens or enhance inflammation.

**Antibody Diversity (H2/H3):**
The human immune system can produce millions of different antibody molecules, each specific to a unique antigen, through several genetic mechanisms.

*   **Somatic Recombination (V(D)J Recombination):**
    *   **Explanation:** During B cell development, gene segments (Variable, Diversity, Joining for heavy chains; Variable, Joining for light chains) that encode the variable regions of antibodies are randomly combined and rearranged. This creates a vast number of unique gene sequences.
*   **Hyper-mutation (Somatic Hypermutation):**
    *   **Explanation:** After B cells are activated by an antigen, their immunoglobulin genes undergo a high rate of point mutations in the variable regions. This process generates B cells with subtly different antibody specificities, some with higher affinity for the antigen.
*   **Class Switching (Isotype Switching):**
    *   **Explanation:** Activated B cells can change the class of antibody they produce (e.g., from IgM to IgG, IgA, or IgE) while retaining the same antigen specificity. This occurs by rearranging the constant region genes, allowing the immune response to adapt to different pathogen types or locations.

**Vaccination and Disease Control:**

*   **Mechanism:** Vaccination introduces weakened or inactivated pathogens, their toxins, or antigens into the body. This stimulates a **primary immune response**, leading to the production of specific antibodies and **memory cells**, without causing the actual disease.
*   **Control of Disease:** Upon subsequent exposure to the actual pathogen, the memory cells mount a rapid and strong **secondary immune response**, quickly neutralizing the pathogen and preventing disease.
*   **Eradication of Smallpox:** A historical success story of vaccination. The smallpox virus was highly stable, had no animal reservoir, and a highly effective vaccine was developed, leading to its global eradication.
*   **Breaking the Disease Transmission Cycle:** If a high enough proportion of the population is vaccinated (**herd immunity**), the pathogen cannot easily spread from person to person, protecting even unvaccinated individuals and eventually leading to the decline or eradication of the disease.
*   **Benefits:** Prevents widespread illness, reduces mortality, protects vulnerable populations, can lead to disease eradication, significant public health and economic benefits.
*   **Risks:** Minor side effects (soreness, fever), rare severe allergic reactions, public misconceptions leading to vaccine hesitancy.

**Viruses Causing Disease (e.g., Influenza, HIV):**

*   **Influenza Virus:**
    *   **Mechanism:** Infects and replicates in the epithelial cells of the respiratory tract.
    *   **Disruption:** Leads to cell lysis, inflammation, and damage to the respiratory epithelium, impairing mucociliary clearance and increasing susceptibility to secondary bacterial infections.
*   **HIV (Human Immunodeficiency Virus):**
    *   **Mechanism:** Primarily infects and destroys **T helper cells (CD4+ T cells)**, which are crucial for coordinating the adaptive immune response.
    *   **Disruption:** Progressive loss of T helper cells severely weakens the immune system, leading to Acquired Immunodeficiency Syndrome (AIDS). Individuals become highly susceptible to opportunistic infections and certain cancers.

**Bacterial Pathogens (e.g., *Mycobacterium tuberculosis*):**

*   **Transmission and Infection:**
    *   ***Mycobacterium tuberculosis* (causes Tuberculosis, TB):**
        *   **Mode of Transmission:** Airborne droplets from an infected person coughing, sneezing, or speaking.
        *   **Infection:** Inhaled bacteria reach the lungs, where they are engulfed by macrophages. The bacteria can survive and multiply within macrophages, forming granulomas (tubercles).
        *   **Disease Progression:** Can lead to latent infection (asymptomatic) or active TB disease (symptoms like chronic cough, fever, weight loss). Can spread to other organs.

**Modes of Action of Antibiotics (e.g., Penicillin):**

*   **Antibiotics:** Drugs that kill or inhibit the growth of bacteria, typically by targeting specific bacterial structures or metabolic pathways that are absent or different in host cells.
*   **Penicillin:**
    *   **Mode of Action:** A beta-lactam antibiotic that inhibits the synthesis of bacterial cell walls. It interferes with the formation of peptidoglycan cross-links, leading to weakened cell walls, osmotic lysis, and bacterial death.
    *   **Specificity:** Targets bacterial cell walls, which are absent in human cells, making it selectively toxic.

**Epidemiology:** The study of the incidence, distribution, and possible control of diseases.

*   **Basic Reproduction Number ($$R_0$$) (H2/H3):**
    *   **Meaning:** The average number of secondary infections produced by one infected individual in a completely susceptible population. It indicates the transmissibility (contagiousness) of an infectious agent.
    *   **Prediction of Outbreak Progress:**
        *   If $$R_0 > 1$$: The infection will spread in the population, potentially leading to an epidemic.
        *   If $$R_0 = 1$$: The infection will remain stable (endemic).
        *   If $$R_0 < 1$$: The infection will die out in the population.
    *   **Public Health:** Understanding $$R_0$$ helps inform public health policies (e.g., vaccination targets, social distancing) to mitigate disease spread.
*   **Terms Describing Disease Spread (e.g., Influenza):**
    *   **Outbreak:** A sudden increase in cases of a disease in a specific geographical area or population group.
    *   **Epidemic:** A widespread occurrence of an infectious disease in a community or region at a particular time, significantly exceeding the expected number of cases.
    *   **Pandemic:** An epidemic that has spread across multiple countries or continents, affecting a large number of people globally.

**Immunity Interdependence and Self-Tolerance (H3):**
*   **Adaptive and Innate Immunity (Mutual Exclusivity and Interdependence):**
    *   **Mutually Exclusive:** Innate immunity provides immediate, non-specific defense, while adaptive immunity provides a delayed, highly specific, and memory-driven response. They are distinct systems.
    *   **Interdependent:** Innate immunity often "presents" antigens to adaptive immunity (via APCs) and provides crucial co-stimulatory signals for T cell activation. Adaptive immunity, in turn, can enhance innate responses (e.g., antibodies enhance phagocytosis). They work together for effective protection.
*   **Immunological Self-Tolerance:**
    *   **Explanation:** The immune system's ability to distinguish between "self" (host cells and tissues) and "non-self" (pathogens, foreign substances) and avoid attacking its own healthy cells.
    *   **Mechanism:** During lymphocyte development (in bone marrow for B cells, thymus for T cells), lymphocytes that strongly react to self-antigens are either eliminated (clonal deletion) or inactivated (clonal anergy). This ensures that B and T lymphocytes do not normally attack host cells that are functioning correctly.
    *   **Consequence of Failure:** Breakdown of self-tolerance leads to autoimmune diseases.

**Human Microbiota and Health (H3):**
*   **Explanation:** The collection of microorganisms (bacteria, fungi, viruses) that live in and on the human body, particularly in the gut, skin, and mucous membranes.
*   **Importance for Health:**
    1.  **Digestion and Nutrient Absorption:** Gut microbiota help break down complex carbohydrates, synthesize vitamins (e.g., K, B vitamins), and aid in nutrient absorption.
    2.  **Immune System Development and Function:** "Educates" the immune system, promoting tolerance to harmless substances and strengthening defenses against pathogens.
    3.  **Pathogen Exclusion:** Occupy ecological niches and produce antimicrobial substances, preventing colonization by harmful pathogens (competitive exclusion).
    4.  **Metabolism:** Influence host metabolism, affecting weight, energy balance, and susceptibility to diseases.

**Factors Affecting Pandemic Probability (H3):**
*   **Sanitation and Water Supply:** Poor sanitation and contaminated water accelerate the spread of water-borne diseases.
*   **Food:** Contaminated food can lead to outbreaks of food-borne illnesses.
*   **Climate:** Climate change can alter vector distributions (e.g., mosquitoes), pathogen survival, and human migration patterns, influencing disease spread.
*   **Large-Scale Movements of People:** Global travel and migration rapidly spread infectious agents across geographical boundaries.
*   **Evolution of New Strains of Virulent Pathogens:** Mutations (antigenic drift/shift) or recombination events can lead to new, highly transmissible, or more virulent strains that bypass existing immunity.
*   **Development of Drug Resistance:** Pathogens evolving resistance to antibiotics or antiviral drugs make infections harder to treat, increasing morbidity and mortality and potentially leading to uncontrolled spread.

### Extension Topic B: Impact of Climate Change on Animals and Plants (H1/H2/H3)

This topic explores the causes and consequences of climate change on living organisms and ecosystems, and human responses to mitigate its effects.

#### A. Causes and Effects of Climate Change

**Human Activities Contributing to Climate Change:**
Climate change is primarily driven by the accumulation of greenhouse gases in the atmosphere, largely due to anthropogenic activities.

*   **Greenhouse Gas Accumulation (CO2 and Methane):**
    *   **Carbon Dioxide ($$CO_2$$):**
        *   **Burning of Fossil Fuels:** Industrial activities, electricity generation, transportation (cars, planes), and heating/cooling of buildings release large amounts of $$CO_2$$.
        *   **Deforestation:** Forests act as carbon sinks. Clearing forests for agriculture, logging, or urbanization reduces $$CO_2$$ absorption and releases stored carbon when trees are burned or decompose.
    *   **Methane ($$CH_4$$):**
        *   **Livestock Farming (Food Choices):** Ruminant animals (cattle, sheep) produce methane during digestion.
        *   **Rice Cultivation:** Anaerobic decomposition in flooded rice paddies.
        *   **Landfills:** Decomposition of organic waste.
        *   **Fossil Fuel Production:** Leakage from natural gas systems and oil wells.
*   **Increasing Consumption of Meat (Food Choices):** Meat production has a disproportionately higher carbon footprint compared to plant-based foods.
    *   **Reasons:** Methane emissions from livestock, land use for grazing and feed crops (leading to deforestation), energy for processing and transport.

**Effects of Climate Change from Greenhouse Gas Emissions:**

*   **Melting of Polar Ice Caps and Glaciers:** Leads to habitat loss for polar species and contributes to rising sea levels.
*   **Rising Sea Levels:** Threatens coastal communities, ecosystems (mangroves, seagrasses), and freshwater supplies (saline intrusion). Singapore is particularly vulnerable.
*   **Increase in Frequency of Extreme Weather Events:** More intense rainfall, droughts, heat waves, and storms, leading to floods, wildfires, and crop failures.
*   **Stress on Freshwater Supplies:** Altered rainfall patterns, increased evaporation, and glacial melt can lead to water scarcity.
*   **Migration of Fishes and Insects:** Species shift their geographical ranges towards poles or higher altitudes to find suitable temperatures, disrupting ecosystems and food webs.
*   **Stress to Coral Reef, Seagrass, and Mangrove Ecosystems:**
    *   **Coral Reefs:** Sensitive to warming water temperatures, leading to **coral bleaching** (expulsion of symbiotic algae) and death. Ocean acidification (from increased $$CO_2$$ absorption by oceans) further inhibits coral growth.
    *   **Seagrass and Mangrove Habitats:** Threatened by rising sea levels, increased storm frequency, and altered salinity.
*   **Release of Greenhouse Gases from Frozen Organic Matter:** Melting permafrost in Arctic regions releases large amounts of stored methane and $$CO_2$$, creating a positive feedback loop that accelerates warming.
*   **Major Shifts in Timing of Organisms' Biological Cycles (Phenology):** Changes in breeding seasons, migration patterns, and flowering times, leading to mismatches between species and their food sources or pollinators.

**Mitigation by Mangrove Ecosystems (H1/H2/H3):**
*   **Carbon Sequestration:** Mangroves are highly efficient at sequestering carbon in their biomass and especially in their dense root systems and underlying sediments (blue carbon). They store carbon for long periods, mitigating atmospheric $$CO_2$$.
*   **Coastal Protection:** Act as natural barriers, protecting coastlines from storm surges, erosion, and rising sea levels.
*   **Biodiversity Hotspots:** Provide critical habitats for a wide range of marine and terrestrial species.

**Carbon Footprints of Anthropogenic Activities (H1/H2/H3):**
*   **Deforestation:** Very high carbon footprint due to release of stored carbon and loss of future carbon sequestration.
*   **Energy Production:**
    *   **Fossil Fuels (coal, oil, natural gas):** Very high carbon footprint due to release of large amounts of $$CO_2$$ when burned.
    *   **Hydroelectric Power:** Relatively low carbon footprint (after initial construction) as it uses renewable water energy.
    *   **Nuclear Power:** Very low carbon footprint (after construction) as it does not emit greenhouse gases during operation, but deals with radioactive waste.
    *   **Solar Power:** Low carbon footprint (after manufacturing) as it uses renewable solar energy.
    *   **Wind Power:** Low carbon footprint (after manufacturing) as it uses renewable wind energy.
    *   **Bioethanol:** Variable carbon footprint; while it uses renewable biomass, its production (e.g., from corn) can have significant emissions related to land use change, fertilizer, and processing.
*   **Food Production:**
    *   **Meat (especially beef):** Very high carbon footprint due to methane from livestock, land use, and feed production.
    *   **Plant-based:** Generally much lower carbon footprint.

**Consequences for Sustainable Food Supply:**
Increased environmental stress from climate change directly threatens global food security.

*   **Effects on Plants:**
    *   **Increased Temperatures:** Can reduce crop yields, accelerate plant development (reducing growing season), and increase water demand.
    *   **Extreme Weather:** Droughts, floods, and storms destroy crops, reduce soil fertility, and disrupt agricultural cycles.
    *   **Pest and Disease Spread:** Warmer temperatures can expand the geographical range and accelerate the life cycles of agricultural pests and plant diseases.
*   **Effects on Animals (Livestock and Fish):**
    *   **Increased Temperatures:** Heat stress in livestock reduces productivity (meat, milk, eggs).
    *   **Extreme Weather:** Loss of grazing lands due to drought or flood.
    *   **Fish Migration and Distribution:** Ocean warming and acidification alter fish habitats, migration patterns, and reproductive success, impacting fisheries and marine food sources. This can lead to reduced fish stocks and unstable global food prices.

**Temperature Changes Impact on Insects:**
*   **Increased Metabolism:** Higher temperatures generally lead to increased metabolic rates in insects (poikilotherms), accelerating their development and reproductive cycles.
*   **Narrow Temperature Tolerance:** Many insect species have narrow optimal temperature ranges. Extreme heat waves can directly kill insects or disrupt their life cycles.
*   **Life Cycle of *Aedes aegypti* (Mosquito Disease Vector):**
    *   **Accelerated Development:** Warmer temperatures shorten the larval development time, leading to more generations per year.
    *   **Increased Biting Rate:** Adult mosquitoes bite more frequently at higher temperatures.
    *   **Faster Pathogen Replication (Extrinsic Incubation Period):** The time it takes for a pathogen (e.g., dengue virus) to replicate within the mosquito and become transmissible is shortened, increasing transmission efficiency.

**Global Warming and Spread of Mosquito-borne Infectious Diseases:**
*   **Expansion Beyond the Tropics:** Increased temperatures extend the geographical range of mosquito vectors (like *Aedes aegypti* and *Anopheles* species) to higher latitudes and altitudes, where they previously could not survive or reproduce. This allows mosquito-borne diseases to spread to new regions.
*   **Malaria:** Caused by *Plasmodium* parasites, transmitted by *Anopheles* mosquitoes. Warmer temperatures can expand suitable habitats for *Anopheles* and accelerate parasite development within the mosquito.
*   **Dengue:** Caused by dengue viruses, transmitted by *Aedes aegypti*. As explained above, warmer temperatures enhance *Aedes aegypti*'s life cycle and virus transmission efficiency.
*   **Overall Impact:** This leads to an increased incidence and geographical spread of these diseases, posing significant public health challenges globally.

#### B. Human Responses and Impacts (H3)

**Human Responses to Mitigate Climate Change:**
*   **Biological Measures:**
    *   **Tree Planting (Afforestation/Reforestation):** Increases forest cover, enhancing natural carbon sequestration.
    *   **Developing Drought-Resistant Varieties of Crops:** Genetic engineering and selective breeding can create crops that can withstand harsher, drier conditions, improving food security in a changing climate.
*   **Lifestyle Changes:**
    *   **Reducing Use of Cars:** Opting for public transport, cycling, or walking reduces fossil fuel consumption and $$CO_2$$ emissions.
    *   **Consumption of Meat:** Reducing meat consumption, especially beef, lowers demand for high-carbon footprint food products.
    *   **Energy Efficiency:** Using energy-efficient appliances, reducing electricity consumption.
    *   **Waste Reduction:** Minimizing waste sent to landfills reduces methane emissions.

**Species Adjustment and Adaptation to Climate Change:**
*   **Adjustment:** Short-term physiological or behavioral changes by individuals (e.g., seeking shade, altering activity times) to cope with changing conditions.
*   **Adaptation:** Long-term evolutionary changes in a population's genetic makeup that improve its fitness in a new environment. This occurs through natural selection on existing variation or new mutations.
*   **Consequences for Ecosystems and Organisms (Longer Term):**
    *   **Range Shifts:** Species move to more favorable climates, altering community composition and potentially leading to novel ecosystems or species extinctions if suitable habitats are unavailable or dispersal is limited.
    *   **Phenological Mismatches:** Changes in timing of biological events (e.g., flowering, migration) can disrupt trophic interactions (e.g., predator-prey, plant-pollinator), leading to population declines.
    *   **Extinction:** Species unable to adjust or adapt quickly enough to rapid environmental changes face extinction.
    *   **Loss of Biodiversity:** Overall reduction in species richness and genetic diversity, weakening ecosystem resilience.

**Impact of Humans on the Environment (Holocene onwards):**
*   **Holocene Epoch (last ~11,700 years):** Marked by the rise of human civilization and significant human impact on the environment.
*   **Anthropocene (Proposed Epoch):** Many scientists argue that human activity has become the dominant influence on Earth's geology and ecosystems.
*   **Measurement of Impact:**
    *   **Biocapacity:** The capacity of a given biologically productive area to generate a continuous supply of renewable resources and to absorb the waste products generated by humans. It represents the Earth's regenerative capacity.
    *   **Ecological Footprint:** A measure of the demand placed by humanity on the Earth's ecosystems. It quantifies the amount of biologically productive land and sea area required to produce the resources consumed and to absorb the waste generated by a human population or activity.
    *   **Comparison:** If the ecological footprint exceeds the biocapacity, it indicates an ecological deficit, meaning humanity is consuming resources faster than the Earth can regenerate them, leading to unsustainability.

**Sixth Mass Extinction:**
*   **Explanation:** Scientists warn that Earth is currently experiencing a **sixth mass extinction event**, characterized by an unprecedented rate of species loss, primarily driven by human activities (habitat destruction, climate change, pollution, overexploitation, invasive species).
*   **Anthropogenic Climatic Change:** A major driver of this extinction event, as many species cannot adapt or migrate fast enough to cope with rapid temperature changes, extreme weather, and habitat alterations.
*   **Biodiversity Loss in Tropics:** The tropics, being biodiversity hotspots, are particularly vulnerable. The loss of this rich reservoir has consequences for:
    *   **Biomedicines:** Many potential drug compounds are derived from tropical species.
    *   **Genetic Diversity for Food:** Wild relatives of crop plants, found in tropical regions, provide essential genetic diversity for breeding disease-resistant or climate-resilient crops. Loss of these wild relatives reduces our ability to ensure future food security.

### Mathematical Requirements (H2/H3)

Biology often involves quantitative analysis. Candidates are expected to apply basic mathematical processes and statistical tests.

**Basic Processes:**
*   **Decimals, Means, Ratios, Percentages:** Fundamental arithmetic skills for data interpretation.
    *   **Example: Calculating a percentage increase.**
        $$
        \text{Percentage increase} = \frac{\text{New value} - \text{Original value}}{\text{Original value}} \times 100\%
        $$
*   **Graphical Forms:** Constructing and interpreting graphs (e.g., line graphs, bar charts, scatter plots) to visualize data, identify trends, and draw conclusions.
*   **Rates of Processes:** Calculating rates from data (e.g., rate of reaction, rate of growth).
    *   **Example: Rate of enzyme activity.**
        $$
        \text{Rate} = \frac{\Delta \text{Product concentration}}{\Delta \text{Time}} \quad \text{or} \quad \frac{\Delta \text{Substrate concentration}}{\Delta \text{Time}}
        $$

**Statistical Concepts:**
*   **Problems of Drawing Conclusions from Limited Data:** Understanding that small sample sizes or incomplete data sets may not accurately represent the true population and can lead to unreliable conclusions.
*   **Levels of Significance (p-value):** The probability of obtaining observed results (or more extreme results) if the null hypothesis were true. Commonly set at $$p = 0.05$$ (5%). If $$p < 0.05$$, the result is considered statistically significant.
*   **Standard Deviation (S):** A measure of the spread or dispersion of data points around the mean. A small standard deviation indicates data points are close to the mean, while a large one indicates wider spread.
    *   **Formula:**
        $$
        S = \sqrt{\frac{\sum(x - \bar{x})^2}{n-1}}
        $$
        Where:
        *   $$x$$ = individual observation
        *   $$\bar{x}$$ = mean of the observations
        *   $$n$$ = sample size
*   **Normal Distribution:** A common probability distribution that is symmetrical and bell-shaped, where most data points cluster around the mean.
*   **Basic Reproduction Number ($$R_0$$):** As covered in Infectious Diseases, used to predict disease spread.

**Statistical Tests (Equations and tables will be provided):**

*   **Hardy-Weinberg Equation:** (As covered in Biological Evolution)
    *   Allele frequencies: $$p + q = 1$$
    *   Genotype frequencies: $$p^2 + 2pq + q^2 = 1$$
*   **t-test:**
    *   **Purpose:** To compare the means of two small unpaired samples to determine if there is a statistically significant difference between them.
    *   **Formula:**
        $$
        t = \frac{|\bar{x}_1 - \bar{x}_2|}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}
        $$
        Where:
        *   $$\bar{x}_1, \bar{x}_2$$ = means of sample 1 and sample 2
        *   $$s_1^2, s_2^2$$ = variances of sample 1 and sample 2
        *   $$n_1, n_2$$ = sample sizes
    *   **Degrees of Freedom ($$\nu$$):**
        $$
        \nu = n_1 + n_2 - 2
        $$
    *   **Interpretation:** Compare calculated $$t$$ value with critical $$t$$ value from a t-table at given degrees of freedom and significance level. If calculated $$t > $$ critical $$t$$, reject the null hypothesis (means are significantly different).
*   **Chi-squared Test ($$\chi^2$$):** (As covered in Inheritance)
    *   **Purpose:** To test the significance of differences between observed and expected results, especially in genetics (breeding experiments) and ecology (sampling).
    *   **Formula:**
        $$
        \chi^2 = \sum \frac{(O - E)^2}{E}
        $$
    *   **Degrees of Freedom ($$\nu$$):**
        $$
        \nu = c - 1
        $$
        Where $$c$$ is the number of classes/categories.
    *   **Interpretation:** Compare calculated $$\chi^2$$ value with critical $$\chi^2$$ value from a chi-squared table at given degrees of freedom and significance level. If calculated $$\chi^2 > $$ critical $$\chi^2$$, reject the null hypothesis (observed data differ significantly from expected).
`,
};


export const CONTEXTS_SECONDARY: Record<SecContextKey, string> = {
  'other': '',
  'Inheritance': `
#### **14. Inheritance**

Inheritance is the process by which genetic information is passed from parents to offspring, leading to both similarities and variations.

**Content:** The Passage of Genetic Information from Parent to Offspring, Monohybrid Crosses, Variation, Natural Selection

**Learning Outcomes:**

**(a) Gene and Allele**

*   **Gene:** A segment of DNA that codes for a specific polypeptide (protein) and determines a particular trait.
*   **Allele:** Different forms or variations of a gene. For example, the gene for flower colour might have an allele for red flowers and an allele for white flowers.

**(b) Genetic Terminology**

*   **Dominant Allele:** An allele that expresses its phenotype even when only one copy is present (i.e., in both homozygous dominant and heterozygous genotypes). Represented by a capital letter (e.g., T for tall).
*   **Recessive Allele:** An allele whose phenotype is only expressed when two copies are present (i.e., in the homozygous recessive genotype). It is masked by a dominant allele in a heterozygote. Represented by a lowercase letter (e.g., t for dwarf).
*   **Codominant Alleles:** Both alleles in a heterozygote are fully expressed in the phenotype, resulting in a phenotype that is a blend or combination of both homozygous phenotypes (e.g., ABO blood groups, where both A and B antigens are expressed in AB individuals).
*   **Homozygous:** Having two identical alleles for a particular gene (e.g., TT or tt). Also called "purebred."
*   **Heterozygous:** Having two different alleles for a particular gene (e.g., Tt). Also called "hybrid."
*   **Phenotype:** The observable physical or biochemical characteristics of an organism, resulting from the interaction of its genotype and the environment (e.g., tall, dwarf, red flowers, blood group A).
*   **Genotype:** The genetic makeup of an organism, referring to the set of alleles it possesses for a particular trait (e.g., TT, Tt, tt).

**(c) and (e) Monohybrid Crosses and Genetic Diagrams**

*   **Monohybrid Cross:** A genetic cross involving only one trait.
*   **F1 Generation:** The first filial generation, consisting of offspring resulting from a cross between two parental (P) individuals.
*   **F2 Generation:** The second filial generation, consisting of offspring resulting from a cross between two F1 individuals.
*   **Expected Ratios:**
    *   **Cross between two heterozygotes (e.g., Tt x Tt):**
        *   Genotypic ratio: $$1 \text{ TT} : 2 \text{ Tt} : 1 \text{ tt}$$
        *   Phenotypic ratio: $$3 \text{ Dominant} : 1 \text{ Recessive}$$ (e.g., $$3 \text{ tall} : 1 \text{ dwarf}$$)
    *   **Cross between a heterozygote and a homozygous recessive (Test Cross, e.g., Tt x tt):**
        *   Genotypic ratio: $$1 \text{ Tt} : 1 \text{ tt}$$
        *   Phenotypic ratio: $$1 \text{ Dominant} : 1 \text{ Recessive}$$ (e.g., $$1 \text{ tall} : 1 \text{ dwarf}$$)

**Example Genetic Diagram (Tt x Tt):**

Let T = Tall (dominant), t = Dwarf (recessive)

**Parental Phenotype:** Tall x Tall
**Parental Genotype:** Tt x Tt
**Gametes:** T, t (from first parent); T, t (from second parent)

**Punnett Square:**
|       | T   | t   |
| :--   | :-- | :-- |
| **T** | TT  | Tt  |
| **t** | Tt  | tt  |

**F1 Genotypes:** 1 TT : 2 Tt : 1 tt
**F1 Phenotypes:** 3 Tall : 1 Dwarf

**(d) Why Observed Ratios Differ from Expected Ratios**

*   Observed phenotypic ratios in real crosses often differ from the expected theoretical ratios, especially when there are **small numbers of progeny**.
*   **Reason:** Genetic crosses are subject to chance and probability, similar to coin tosses. With a small sample size, random fluctuations are more pronounced. As the sample size increases, the observed ratios tend to converge towards the expected theoretical ratios.

**(f) Codominance and Multiple Alleles (ABO Blood Groups)**

*   **Multiple Alleles:** More than two alleles exist for a particular gene within a population (though an individual can only have two).
*   **ABO Blood Group Inheritance:** Controlled by three alleles: $$I^A$$, $$I^B$$, and $$I^O$$.
    *   $$I^A$$ and $$I^B$$ are codominant to each other.
    *   $$I^O$$ is recessive to both $$I^A$$ and $$I^B$$.
*   **Genotypes and Phenotypes:**

| Genotype       | Phenotype (Blood Group) |
| :------------- | :---------------------- |
| $$I^A I^A$$    | A                       |
| $$I^A I^O$$    | A                       |
| $$I^B I^B$$    | B                       |
| $$I^B I^O$$    | B                       |
| $$I^A I^B$$    | AB (Codominance)        |
| $$I^O I^O$$    | O                       |

**(g) Sex Determination in Humans**

*   **Chromosomes:** Humans have 46 chromosomes (23 pairs). 22 pairs are autosomes (non-sex chromosomes), and 1 pair are sex chromosomes.
*   **Female:** Possesses two X chromosomes (XX). All ova carry an X chromosome.
*   **Male:** Possesses one X and one Y chromosome (XY). Sperm can carry either an X or a Y chromosome.
*   **Mechanism:** Sex is determined by the sperm that fertilises the egg.
    *   If an X-carrying sperm fertilises the egg (X), the resulting zygote is XX (female).
    *   If a Y-carrying sperm fertilises the egg (X), the resulting zygote is XY (male).
    *   The probability of having a male or female child is approximately $$50\% : 50\%$$.

**(h) Mutation**

*   **Definition:** A sudden, random, and permanent change in the genetic material (DNA sequence) of an organism.
*   **Types:**
    *   **Gene Mutation:** A change in the sequence of nucleotides within a single gene.
        *   **Example:** Sickle cell anaemia. A single nucleotide substitution in the gene for haemoglobin causes a change in one amino acid, leading to abnormal haemoglobin and sickle-shaped red blood cells.
    *   **Chromosome Mutation:** A change in the structure or number of chromosomes.
        *   **Example:** Down syndrome. Caused by an extra copy of chromosome 21 (trisomy 21), resulting in 47 chromosomes instead of the normal 46.

**(i) Factors Increasing Mutation Rate (Mutagens)**

*   **Mutagens:** Agents that can cause mutations.
*   **Ionising Radiation:** High-energy radiation that can damage DNA.
    *   **Examples:** X-rays, gamma rays, ultraviolet (UV) radiation.
*   **Chemical Mutagens:** Certain chemicals that can alter DNA structure.
    *   **Examples:** Mustard gas, certain components in tobacco smoke.

**(j) Continuous and Discontinuous Variation**

*   **Variation:** Differences between individuals of the same species.
*   **Continuous Variation:**
    *   **Description:** Shows a complete range of phenotypes between two extremes, with many intermediate values.
    *   **Influence:** Influenced by multiple genes (polygenic inheritance) and environmental factors.
    *   **Examples:** Height, weight, skin colour, leaf length.
*   **Discontinuous Variation:**
    *   **Description:** Phenotypes fall into distinct categories with no intermediate forms.
    *   **Influence:** Controlled by one or a few genes, largely unaffected by environmental factors.
    *   **Examples:** Blood groups (A, B, AB, O), presence or absence of a disease, eye colour (in simplified models).

**(k) to (m) Natural Selection and Evolution**

*   **Variation and Competition:** Within any population, there is natural **variation** among individuals. Organisms produce more offspring than the environment can support, leading to **competition** for limited resources (food, space, mates).
*   **Differential Survival and Reproduction:**
    *   Individuals with advantageous traits (adaptations) that make them **best fitted to the environment** are more likely to survive the competition.
    *   These better-adapted individuals are also more likely to **reproduce** and pass on their advantageous genes to their offspring.
*   **Environmental Factors as Forces of Natural Selection:**
    *   **Predation:** Prey with better camouflage or speed are more likely to survive.
    *   **Food availability:** Individuals better able to find or process food will thrive.
    *   **Climate/Temperature:** Organisms adapted to extreme temperatures will survive in those conditions.
    *   **Disease:** Individuals with natural resistance to a disease are more likely to survive an epidemic.
    *   **Pollution:** Some organisms may develop resistance to pollutants.
*   **Role of Natural Selection in Evolution:**
    *   Natural selection is a possible mechanism for **evolution**. Over many generations, the advantageous traits become more common in the population because the individuals carrying them reproduce more successfully.
    *   This leads to a gradual change in the **inheritable characteristics of a population over time**, resulting in the evolution of new species or adaptations within existing ones.
`,
};